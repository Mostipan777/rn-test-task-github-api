import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Arrow from '../../assets/icons/Arrow';
import {theme} from '../../common/theme';
import {styles} from './styles';

interface InputProps {
  text: string;
  onChangeText: (text: string) => void;
  onPressHandler: () => void;
}

const Input: React.FC<InputProps> = ({text, onChangeText, onPressHandler}) => {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        placeholder="Search"
        placeholderTextColor={theme.primaryColor}
        value={text}
        keyboardAppearance="dark"
        style={styles.text}
      />
      {text ? (
        <TouchableOpacity
          style={styles.button}
          onPress={() => onPressHandler()}>
          <Arrow color={theme.primaryColor} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Input;
