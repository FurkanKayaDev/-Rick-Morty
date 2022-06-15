import {View, Text} from 'react-native';
import React from 'react';

const Character = ({route}) => {
  const {url} = route.params;

  return (
    <View>
      <Text>Character {url}</Text>
    </View>
  );
};

export default Character;
