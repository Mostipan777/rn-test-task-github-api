import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

interface CustomHeaderProps {
  title: string;
}

const CustomHeader = ({title}: CustomHeaderProps) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default CustomHeader;
