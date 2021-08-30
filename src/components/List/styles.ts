import {StyleSheet} from 'react-native';
import {theme} from '../../common/theme';

export const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 20,
    marginBottom: 0,
    borderRadius: 15,
    minHeight: 100,
    backgroundColor: theme.secondaryColor,
    padding: 20,
  },
  itemContent: {
    flex: 1,
    marginTop: 12,
    marginRight: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.primaryColor,
  },
  description: {
    fontSize: 15,
    fontWeight: '400',
    color: theme.primaryColor,
    marginTop: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
    color: theme.primaryColor,
    marginTop: 10,
  },
  container: {
    flex: 1,
  },
  activityIndicator: {
    paddingBottom: 50,
    paddingTop: 50,
  },
});
