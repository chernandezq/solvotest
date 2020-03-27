import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(249, 249, 254)',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    width: 150,
    height: 150,
  },
  searchSection: {
    marginLeft: 20,
    marginRight: 20,
    paddingHorizontal: 20,
    height: 50,
    paddingBottom: 35,
    marginBottom: 30,
    marginTop: 20,
    backgroundColor: '#e9e9e9e9',
    borderRadius: 4,
  },
  input: {
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'left',
    width: '100%',
    height: 50,
    paddingHorizontal: 20,
    fontSize: 16,
    textAlignVertical: 'center',
  },
  flatlist: {
    paddingHorizontal: 18,
  },
});
