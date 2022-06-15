import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './DetailList.styles';

const DetailList = ({navigation, details}) => {
  hadleGoToDetail = url => {
    navigation.navigate('Characters', {url});
  };
  return (
    <ScrollView>
      <View key={details.id}>
        <Text style={styles.name}>{details.episode}</Text>
        <Text style={styles.name}>Name: {details.name}</Text>
        <Text style={styles.name}>Date: {details.air_date}</Text>
        <Text style={styles.name}>Characters</Text>
        {details?.characters?.map(character => {
          return (
            <TouchableOpacity
              key={details.characters.index}
              onPress={() => hadleGoToDetail(character)}>
              <Text key={character} style={styles.card}>
                Character id:{' '}
                {
                  character
                    .split('/')
                    [character.split('/').length - 1].split('?')[0]
                }
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default DetailList;
