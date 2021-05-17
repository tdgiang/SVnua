import React, {Fragment, useRef, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TabNavigator from './TabNavigation';
import Login from '../Screens/Authen/Login';

//Home
import TimeTable from '../Screens/Menu/TimeTable/TimeTable';
import Curriculum from '../Screens/Menu/Curriculum/Curriculum';
import Evaluate from '../Screens/Menu/Evaluate/Evaluate';
import ExamCalendar from '../Screens/Menu/ExamCalendar/ExamCalendar';
import Finace from '../Screens/Menu/Finace/Finace';
import Graduation from '../Screens/Menu/Graduation/Graduation';
import RegisterSubject from '../Screens/Menu/RegisterSubject/RegisterSubject';
import Servey from '../Screens/Menu/Servey/Servey';
import ResultGrade from '../Screens/Menu/ResultGrade/ResultGrade';
import Notificaiton from '../Screens/Menu/Notification/Notification';
//News
import Bustle from '../Screens/MenuNews/Bustle/Bustle';
import Job from '../Screens/MenuNews/Job/Job';
import Scholarship from '../Screens/MenuNews/Scholarship/Scholarship';
import TableNews from '../Screens/MenuNews/TableNews/TableNews';

//Account
import ChangePassword from '../Screens/MenuAccount/ChangePassword/ChangePassword';
import Feedback from '../Screens/MenuAccount/FeedBack/Feedback';
import Paper from '../Screens/MenuAccount/Paper/Paper';
import Profile from '../Screens/MenuAccount/Profile/Profile';
import Question from '../Screens/MenuAccount/Question/Question';
import Setting from '../Screens/MenuAccount/Setting/Setting';

import Intership from '../Screens/MenuNews/Job/Intership';
import JobNow from '../Screens/MenuNews/Job/JobNow';
import OverTime from '../Screens/MenuNews/Job/OverTime';
import Recruit from '../Screens/MenuNews/Job/Recruit';
import Reply from '../Screens/MenuAccount/Question/Reply';
import DetailMess from '../Screens/Mess/DetailMess';
import DetailPeriod from '../Screens/Menu/ResultGrade/DetailPeriod';

import EvaluateResult from '../Screens/Menu/Evaluate/EvaluateResult';
import EvaluateTeacher from '../Screens/Menu/Evaluate/EvaluateTeacher';
import EvaluateUser from '../Screens/Menu/Evaluate/EvaluateUser';

import QuestionServey from '../Screens/Menu/Servey/QuestionServey';
import DetailServey from '../Screens/Menu/Servey/DetailServey';

import HistoryTransfer from '../Screens/FinaceChildren/HistoryTransfer';
import PayDebt from '../Screens/FinaceChildren/PayDebt';
import Pays from '../Screens/FinaceChildren/Pays';
import HomeTeam from '../Screens/MSTeam/Home/HomeTeam';
import DetailTeam from '../Screens/MSTeam/DetailTeam/DetailTeam';
import DetailPost from '../Screens/MSTeam/DetailTeam/DetailPost';

import * as ScreenName from './ScreenNames';

const Stack = createStackNavigator();

function MyStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStatusBarHeight: 0,
      }}
      headerMode={'none'}
      initialRouteName={ScreenName.LOGINSCREEN}>
      <Stack.Screen
        name={ScreenName.EVALUATERESULT}
        component={EvaluateResult}
      />
      <Stack.Screen
        name={ScreenName.EVALUATETEACHER}
        component={EvaluateTeacher}
      />
      <Stack.Screen name={ScreenName.EVALUATEUSER} component={EvaluateUser} />
      <Stack.Screen name={ScreenName.DETAILTEAM} component={DetailTeam} />
      <Stack.Screen
        name={ScreenName.HISTORYTRANSFER}
        component={HistoryTransfer}
      />
      <Stack.Screen name={ScreenName.PAYDEBT} component={PayDebt} />
      <Stack.Screen name={ScreenName.PAYS} component={Pays} />

      <Stack.Screen name={ScreenName.DETAILPOST} component={DetailPost} />

      <Stack.Screen
        name={ScreenName.QUESTIONSERVEY}
        component={QuestionServey}
      />
      <Stack.Screen name={ScreenName.DETAILSERVEY} component={DetailServey} />

      <Stack.Screen name={ScreenName.LOGINSCREEN} component={Login} />
      <Stack.Screen name={ScreenName.REPLY} component={Reply} />
      <Stack.Screen name={ScreenName.TABBAR} component={TabNavigator} />
      <Stack.Screen name={ScreenName.TIMETABLE} component={TimeTable} />
      <Stack.Screen name={ScreenName.CURRICULUM} component={Curriculum} />
      <Stack.Screen name={ScreenName.EVALUATE} component={Evaluate} />
      <Stack.Screen name={ScreenName.EXAMCALENDAR} component={ExamCalendar} />
      <Stack.Screen name={ScreenName.FINACE} component={Finace} />
      <Stack.Screen name={ScreenName.GRADUATION} component={Graduation} />
      <Stack.Screen name={ScreenName.DETAILMESS} component={DetailMess} />
      <Stack.Screen name={ScreenName.DETAILPRIOD} component={DetailPeriod} />
      <Stack.Screen
        name={ScreenName.REGISTERSUBJECT}
        component={RegisterSubject}
      />
      <Stack.Screen name={ScreenName.SERVEY} component={Servey} />
      <Stack.Screen name={ScreenName.RESULTGRADE} component={ResultGrade} />
      <Stack.Screen name={ScreenName.NOTIFICATION} component={Notificaiton} />
      <Stack.Screen name={ScreenName.BUSTLE} component={Bustle} />
      <Stack.Screen name={ScreenName.JOB} component={Job} />
      <Stack.Screen name={ScreenName.SCHOLARSHIP} component={Scholarship} />
      <Stack.Screen name={ScreenName.TABLENEWS} component={TableNews} />

      <Stack.Screen name={ScreenName.INTERSHIP} component={Intership} />
      <Stack.Screen name={ScreenName.JOBNOW} component={JobNow} />
      <Stack.Screen name={ScreenName.OVERTIME} component={OverTime} />
      <Stack.Screen name={ScreenName.RECRUIT} component={Recruit} />

      <Stack.Screen
        name={ScreenName.CHANGEPASSWORD}
        component={ChangePassword}
      />
      <Stack.Screen name={ScreenName.FEEDBACK} component={Feedback} />
      <Stack.Screen name={ScreenName.PAPER} component={Paper} />
      <Stack.Screen name={ScreenName.PROFILE} component={Profile} />
      <Stack.Screen name={ScreenName.QUESTION} component={Question} />
      <Stack.Screen name={ScreenName.SETTING} component={Setting} />
      <Stack.Screen name={ScreenName.HOMETEAM} component={HomeTeam} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Fragment>
      <NavigationContainer independent={true}>
        <MyStack />
      </NavigationContainer>
    </Fragment>
  );
}
