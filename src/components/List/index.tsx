import React, {useState} from 'react';
import {View, Text, FlatList, RefreshControl} from 'react-native';
import {styles} from './styles';
import {theme} from '../../common/theme';

interface ListProps {
  data: any[];
  onPressHandler: () => void;
}
const List: React.FC<ListProps> = ({data, onPressHandler}) => {
  const [isRefreshing] = useState(false);

  const onRefreshHandler = () => {
    setTimeout(() => {
      onPressHandler();
    }, 1000);
  };

  const Item = ({item}: Record<string, any>) => {
    return (
      <View style={styles.item}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>
          Language: <Text style={styles.text}>{item.language}</Text>
        </Text>
        <Text style={styles.description}>
          Description: <Text style={styles.text}>{item.description}</Text>
        </Text>
      </View>
    );
  };

  if (data) {
    return (
      <FlatList
        data={data}
        renderItem={Item}
        keyExtractor={(item: Record<string, string>) => item.id}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={() => onRefreshHandler()}
            title="Pull to refresh"
            tintColor={theme.secondaryColor}
            titleColor={theme.secondaryColor}
          />
        }
      />
    );
  }
  return null;
};

export default List;
