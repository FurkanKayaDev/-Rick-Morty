import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './Detail.styles';
import axios from 'axios';

const Detail = ({navigation, route}) => {
  const [episodes, setEpisodes] = useState();
  const {details} = route.params;

  const hadleGoToDetail = url => {
    navigation.navigate('Characters', {url});
  };

  const fetchCharacter = async url => {
    return await axios.get(url).then(res => {
      setEpisodes(res.data);
    });
  };
  useEffect(() => {
    fetchCharacter(details.url);
  }, [details.url]);

  return (
    <ScrollView>
      <View>
        <Text style={styles.name}>{details.episode}</Text>
        <Text style={styles.name}>Name: {details.name}</Text>
        <Text style={styles.name}>Date: {details.air_date}</Text>
        <Text style={styles.character_title}>Characters</Text>

        {details?.characters?.map(character => {
          return (
            <TouchableOpacity
              style={styles.card}
              key={character.split('/')[character.split('/').length - 1]}
              onPress={() => hadleGoToDetail(character)}>
              <Text style={styles.character_name}>
                Character ID:{' '}
                {character.split('/')[character.split('/').length - 1]}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Detail;
