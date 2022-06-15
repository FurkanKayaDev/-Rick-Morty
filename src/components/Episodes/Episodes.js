import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Episodes.styles';

const Episodes = ({item}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cart} key={item.id}>
        <Text>{item.episode}</Text>
        <Text>{item.name}</Text>
        <Text>{item.air_date}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Episodes;
