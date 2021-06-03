import React, {Component, useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import TableNewsView from './TableNewsView';
import {getListNews} from '../../../apis/Functions/News';
import {showAlert, TYPE} from '../../../components/DropdownAlert/index';
const TableNews = (props) => {
  const [isRefresh, setisRefresh] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setisRefresh(true);
    const res = await getListNews({});
    setisRefresh(false);
    if ((res.data.code = 200 && res.data.data)) {
      setData(res.data.data);
      console.log(res.data.data);
    } else {
      showAlert(TYPE.ERROR, I18n.t('Notification'), res.data.message);
    }
  };

  const onRefresh = () => {
    getData();
  };

  return (
    <TableNewsView data={data} onRefresh={onRefresh} isRefresh={isRefresh} />
  );
};

export default TableNews;
