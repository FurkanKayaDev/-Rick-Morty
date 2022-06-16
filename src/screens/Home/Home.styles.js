import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: height / 2.7,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  load_more: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'gray',
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    width: width / 1,
    height: height / 15,
    paddingTop: 5,
    margin: 0,
  },
  load_info: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'red',
    margin: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#3e4a5b',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

export default styles;
