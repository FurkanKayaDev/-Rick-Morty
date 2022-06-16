import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchEpisodes} from '../../redux/episodeSlice/episodeSlice';
import styles from './Home.styles';
import Episodes from '../../components/Episodes';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const episodes = useSelector(state => state.episode.episodes);
  const loading = useSelector(state => state.episode.loading);
  const error = useSelector(state => state.episode.error);
  const nextPage = useSelector(state => state.episode.page);
  const hasNextPage = useSelector(state => state.episode.hasNextPage);

  useEffect(() => {
    dispatch(fetchEpisodes());
  }, []);

  return (
    <View>
      <ScrollView>
        <Image
          style={styles.image}
          source={{
            uri: 'https://shiftdelete.net/wp-content/uploads/2021/08/3745412.jpg',
          }}
        />
        <View>
          <Text style={styles.header}>Rick and Morty Episodes</Text>
        </View>
        {episodes?.map(episode => {
          return (
            <Episodes item={episode} key={episode.id} navigation={navigation} />
          );
        })}
        {loading && <ActivityIndicator size={30} />}
        {hasNextPage && (
          <TouchableOpacity onPress={() => dispatch(fetchEpisodes(nextPage))}>
            <Text style={styles.load_more}>Load More ({nextPage})</Text>
          </TouchableOpacity>
        )}
        {!hasNextPage && (
          <Text style={styles.load_info}>There is nothing to be shown</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
