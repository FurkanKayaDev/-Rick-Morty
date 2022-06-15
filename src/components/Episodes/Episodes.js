import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Episodes.styles';

const Episodes = ({item, navigation}) => {
  hadleGoToDetail = details => {
    navigation.navigate('Detail', {details});
  };
  console.log('aaaaaaaaaaaa', item);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        key={item.id}
        onPress={() => hadleGoToDetail(item)}>
        <Text style={styles.item_text}>{item.episode}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Episodes;
