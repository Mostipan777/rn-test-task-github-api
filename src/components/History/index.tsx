import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

interface HistoryProps {
  history: string[];
}

const History: React.FC<HistoryProps> = ({history}) => {
  const mapHistory = () => {
    return history.slice(0, 5).map((element: string, index: number) => {
      return (
        <Text key={index} style={styles.text}>
          {element}
        </Text>
      );
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search history:</Text>
      {mapHistory()}
    </View>
  );
};

export default History;
