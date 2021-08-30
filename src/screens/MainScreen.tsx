import React, {useState} from 'react';
import {theme} from '../common/theme';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../store';
import {
  KeyboardAvoidingView,
  StatusBar,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import List from '../components/List';
import {fetchData} from '../store/dataSlice';
import {addEvent} from '../store/historySlice';
import Input from '../components/Input';
import {styles} from './styles';
import History from '../components/History';

const ChannelScreen = () => {
  const [text, onChangeText] = useState('');
  const {data, status, error} = useSelector((state: RootState) => state.data);
  const {history} = useSelector((state: RootState) => state.history);
  const dispatch = useDispatch();

  const onPressHandler = () => {
    dispatch(fetchData({text: text}));
    dispatch(addEvent(text));
  };

  const getListView = () => {
    if (!data) {
      return null;
    }
    if (status === 'pending') {
      return (
        <ActivityIndicator
          style={styles.activityIndicator}
          color={theme.secondaryColor}
          size="large"
        />
      );
    }
    if (status === 'rejected') {
      return <Text style={styles.error}>{error}</Text>;
    }
    return <List data={data} onPressHandler={onPressHandler} />;
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="light-content" />
      <Input
        text={text}
        onChangeText={onChangeText}
        onPressHandler={onPressHandler}
      />
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        {history.length ? <History history={history} /> : null}
        {getListView()}
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChannelScreen;
