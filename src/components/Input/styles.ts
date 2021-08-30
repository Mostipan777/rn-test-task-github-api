import {theme} from '../../common/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.secondaryColor,
    margin: 15,
  },
  text: {
    color: theme.primaryColor,
    fontSize: 16,
    padding: 12,
  },
  button: {
    paddingRight: 15,
  },
});
