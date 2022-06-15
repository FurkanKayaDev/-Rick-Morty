import {View, Text} from 'react-native';
import React from 'react';
import DetailList from '../../components/DetailList';

const Detail = ({navigation, route}) => {
  const {details} = route.params;
  return (
    <View key={details.id}>
      <DetailList details={details} navigation={navigation} />
    </View>
  );
};

export default Detail;
