import {StyleSheet} from 'react-native';
import {theme} from '../../common/theme';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginBottom: 25,
  },
  text: {
    color: theme.secondaryColor,
    fontSize: 14,
    paddingTop: 5,
  },
  title: {
    color: theme.secondaryColor,
    fontSize: 18,
    paddingVertical: 7,
  },
});
