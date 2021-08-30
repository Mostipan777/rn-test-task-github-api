import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CustomHeader from '../components/CustomHeader';
import {theme} from '../common/theme';
import MainScreen from '../screens/MainScreen';
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            headerTitle: () => <CustomHeader title="GitHub API" />,
            headerStyle: {backgroundColor: theme.primaryColor},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
