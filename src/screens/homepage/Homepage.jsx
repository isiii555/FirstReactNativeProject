/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {StyledScrollView, StyledView} from '../../common/StyledComponents';
import Layout from '../../common/components/Layout';
import { FlatList } from 'react-native';
import UserInfo from './components/UserInfo';

const Homepage = () => {
  const [users,setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const jsonData = await res.json();
      setUsers(jsonData);
    };

    fetchUsers();

  },[]);

  return (
    <Layout title = "Homepage">
      <StyledScrollView className="flex-1">
        <FlatList
        data={users}
        renderItem={({item}) => <UserInfo user={item}/>}
        scrollEnabled = {false}
        />
      </StyledScrollView>
    </Layout>
  );
};

export default Homepage;
