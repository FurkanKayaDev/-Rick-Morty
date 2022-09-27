import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './Characters.styles';

const Character = ({route, navigation}) => {
  const [character, setCharacter] = useState([]);
  const {url} = route.params;
  console.log('episode', character.episode);

  hadleGoToDetail = details => {
    navigation.navigate('Detail', {details});
  };

  const fetchCharacter = async url => {
    return await axios.get(url).then(res => {
      setCharacter(res.data);
    });
  };
  useEffect(() => {
    fetchCharacter(url);
  }, [url]);

  return (
    <View>
      <ScrollView>
        <Image style={styles.image} source={{uri: character.image}} />
        <View style={styles.container}>
          <Text style={styles.title_text}>
            <Text style={styles.title_answer}>Name : </Text>
            {character.name}
          </Text>
          <Text style={styles.title_text}>
            <Text style={styles.title_answer}>Status: </Text>
            {character.status}
          </Text>
          <Text style={styles.title_text}>
            <Text style={styles.title_answer}>Species: </Text>
            {character.species}
          </Text>
          <Text style={styles.title_text}>
            <Text style={styles.title_answer}>Gender: </Text>
            {character.gender}
          </Text>
          <Text style={styles.episode_header}>
            <Text style={styles.episode_text}>Episodes Played</Text>
          </Text>
          {character?.episode?.map(episode => {
            return (
              <View
                style={styles.card}
                key={episode.split('/')[episode.split('/').length - 1]}>
                <Text style={styles.card_text}>
                  Episode: {episode.split('/')[episode.split('/').length - 1]}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Character;
