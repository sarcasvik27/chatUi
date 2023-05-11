import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Chat from './src/screens/Chat';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './src/screens/Home';
const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home" >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen
          name="Chats"
          component={Chat}
          options={{
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
