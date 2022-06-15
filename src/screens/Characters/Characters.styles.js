import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2.5,
    resizeMode: 'contain',
    marginVertical: 10,
    alignSelf: 'center',
  },
  container: {
    marginHorizontal: 17,
  },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
    marginVertical: 5,
    fontStyle: 'italic',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  title_text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 5,
    alignItems: 'flex-start',
    fontStyle: 'italic',
  },
  title_answer: {
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    color: 'red',
    marginVertical: 5,
  },
  episode_text: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: 'red',
    marginVertical: 5,
    padding: 5,
  },
  episode_header: {
    textAlign: 'center',
    borderBottomWidth: 0.5,
    marginVertical: 10,
    padding: 5,
    borderColor: 'gray',
  },
});

export default styles;
