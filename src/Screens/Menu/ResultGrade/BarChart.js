import React from 'react';
import {AppRegistry, StyleSheet, Text, View, processColor} from 'react-native';

import {BarChart} from 'react-native-charts-wrapper';
import R from '../../../assets/R';
import {getFontXD} from '../../../Config/Functions';

class BarChartScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      legend: {
        enabled: true,
      },
      data: {
        dataSets: [
          {
            values: [
              {y: 7.45},
              {y: 7.54},
              {y: 7.81},
              {y: 7.01},
              {y: 7.37},
              {y: 8.5},
              {y: 9.07},
            ],
            label: 'Bar dataSet',

            config: {
              color: processColor('#CBCBCB'),
              barShadowColor: processColor('lightgrey'),
              highlightAlpha: 100,
              highlightColor: processColor('#00DD00'),
              valueTextSize: getFontXD(36),
            },
          },
        ],

        config: {
          barWidth: 0.5,
        },
      },

      highlights: [{x: 6}],
      marker: {
        textSize: 22,
      },
      xAxis: {
        valueFormatter: ['1', '2', '3', '4', '5', '6', '7', '8'],
        granularityEnabled: true,
        granularity: 1,
        granularityEnabled: true,
        granularity: 1,
        gridDashedLine: {
          lineLength: 0,
          spaceLength: 10,
          phase: 0,
        },
        textSize: getFontXD(52),
        position: 'BOTTOM',
        //Trục bên dưới  trục x
        drawAxisLine: true,
      },
      yAxis: {
        left: {
          //Màu cột y
          drawGridLines: true,
          axisLineColor: processColor(R.colors.gray),
          //Màu kẻ ngang
          //Khoảng cách số
          granularity: 0.5,
        },
        right: {
          enabled: false,
        },
      },
      legend: {
        enabled: false,
      },
    };
  }

  handleSelect(event) {
    let entry = event.nativeEvent;
    if (entry.x != null) {
      this.props.onSelected(entry.x);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <BarChart
          style={styles.chart}
          data={this.state.data}
          xAxis={this.state.xAxis}
          yAxis={this.state.yAxis}
          animation={{durationX: 2000}}
          marker={{textSize: 16}}
          legend={this.state.legend}
          gridBackgroundColor={processColor('#ffffff')}
          visibleRange={{x: {min: 7, max: 8}}}
          drawBarShadow={false}
          drawValueAboveBar={true}
          drawHighlightArrow={true}
          chartDescription={''}
          onSelect={this.handleSelect.bind(this)}
          highlights={this.state.highlights}
          onChange={(event) => console.log(event.nativeEvent)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.white,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  chart: {
    flex: 1,
    marginBottom: 10,
    backgroundColor: R.colors.white,
  },
});

export default BarChartScreen;
