import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import Item from './Item';

const DATA = [
  {
    id: '1',
    idSubject: 'TH0003',
    subject: 'Lập trình hướng đối tượng.',
    hoc: 'E207',
    count: 3,
    semester: 4,
    active: true,
  },
  {
    id: '2',
    idSubject: 'TH0003',
    subject: 'Lập trình hướng đối tượng.',
    hoc: 'E207',
    count: 3,
    semester: 5,
    active: true,
  },
  {
    id: '3',
    idSubject: 'TH0003',
    subject: 'Lập trình hướng đối tượng.',
    hoc: 'E207',
    count: 3,
    semester: 6,
    active: false,
  },
  {
    id: '4',
    idSubject: 'TH0003',
    subject: 'Lập trình hướng đối tượng.',
    hoc: 'E207',
    count: 3,
    semester: 7,
    active: true,
  },
  {
    id: '5',
    idSubject: 'TH0003',
    subject: 'Lập trình hướng đối tượng.',
    hoc: 'E207',
    count: 3,
    semester: 7,
    active: false,
  },
];

const Tab1 = (props) => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Item item={item} />}
      />
    </View>
  );
};

export default Tab1;
