import React, {Component, useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import ScholarshipView from './ScholarshipView';
import {getListScholarships} from '../../../apis/Functions/scholarships';
import {showAlert, TYPE} from '../../../components/DropdownAlert/index';

const Scholarship = (props) => {
  const [isRefresh, setisRefresh] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setisRefresh(true);
    const res = await getListScholarships({});
    setisRefresh(false);
    if ((res.data.code = 200 && res.data.data)) {
      setData(res.data.data);
    } else {
      showAlert(TYPE.ERROR, I18n.t('Notification'), res.data.message);
    }
  };

  const onRefresh = () => {
    getData();
  };

  return (
    <ScholarshipView data={data} onRefresh={onRefresh} isRefresh={isRefresh} />
  );
};

export default Scholarship;
