import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginVertical: 5,
  },
  character_name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginVertical: 5,
  },
  card: {
    backgroundColor: '#3e4a5b',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 14,
    color: 'black',
    marginVertical: 5,
  },
  character_title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
    marginVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'gray',
    fontStyle: 'italic',
  },
});

export default styles;
