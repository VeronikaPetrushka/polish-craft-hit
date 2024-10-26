import React from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import FoldersScreen from './src/screens/FoldersScreen';
import FolderDetailsScreen from './src/screens/FolderDetailsScreen';
import DailyGameScreen from './src/screens/DailyGameScreen';

enableScreens();

const Stack = createStackNavigator();


const App = () => {
  
    return (
        <NavigationContainer>
                    <Stack.Navigator initialRouteName="HomeScreen">
                        <Stack.Screen 
                            name="HomeScreen" 
                            component={HomeScreen} 
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                            name="DailyGameScreen" 
                            component={DailyGameScreen} 
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                            name="FoldersScreen" 
                            component={FoldersScreen} 
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                            name="FolderDetailsScreen" 
                            component={FolderDetailsScreen} 
                            options={{ headerShown: false }} 
                        />
                    </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
