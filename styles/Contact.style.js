import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  defaultContainer: {
    borderRadius: 4,
    borderWidth: 3,
    borderColor: '#A09C98',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10
  },
  selectedContainer: {
    borderRadius: 4,
    borderWidth: 3,
    borderColor: '#A09C98',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
