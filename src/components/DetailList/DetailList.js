import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './DetailList.styles';

const DetailList = ({navigation, details}) => {
  hadleGoToDetail = url => {
    navigation.navigate('Characters', {url});
  };
  return (
    <View>
      <ScrollView>
        <Text style={styles.name}>{details.episode}</Text>
        <Text style={styles.name}>Name: {details.name}</Text>
        <Text style={styles.name}>Date: {details.air_date}</Text>
        <Text style={styles.name}>Characters</Text>
        {details.characters.map(character => {
          return (
            <TouchableOpacity
              key={details.characters.index}
              onPress={() => hadleGoToDetail(character)}>
              <Text key={character} style={styles.card}>
                {character}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default DetailList;
