import React from 'react';
import ColorList from './src/components/ColorList';
import ColorDetails from './src/components/ColorDetails';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="ColorList"
          options={{ title: "Color List" }}
          component={ColorList}
        />
        <Screen
          name="ColorDetails"
          component={ColorDetails}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;