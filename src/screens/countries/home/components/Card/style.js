import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e9e9e9',
    borderRadius: 4,
    justifyContent: 'space-between',
    paddingBottom: 25,
  },
  thumbnail: {
    width: '100%',
    height: 220,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    marginBottom: 10,
  },
  body: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  region: {
    fontSize: 16,
    color: 'rgb(251, 173, 18)',
    fontWeight: '600',
  },
  capitalTitle: {
    fontSize: 12,
  },
});
