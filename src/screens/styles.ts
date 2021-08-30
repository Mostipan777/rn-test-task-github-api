import {StyleSheet} from 'react-native';
import {theme} from '../common/theme';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.primaryColor,
    flex: 1,
  },
  container: {
    flex: 1,
  },
  activityIndicator: {
    paddingBottom: 50,
    paddingTop: 50,
  },
  error: {
    textAlign: 'center',
    color: theme.secondaryColor,
    fontSize: 25,
    margin: 50,
  },
});
