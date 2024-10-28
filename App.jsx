import React from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import FoldersScreen from './src/screens/FoldersScreen';
import FolderDetailsScreen from './src/screens/FolderDetailsScreen';
import DailyGameScreen from './src/screens/DailyGameScreen';
import ArtsScreen from './src/screens/ArtsScreen';
import QuizScreen from './src/screens/QuizScreen';
import MuseumScreen from './src/screens/MuseumScreen';
import LegendsScreen from './src/screens/LegendsScreen';
import PlacesScreen from './src/screens/PlacesScreen';

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
                        <Stack.Screen 
                            name="ArtsScreen" 
                            component={ArtsScreen} 
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                            name="QuizScreen" 
                            component={QuizScreen} 
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                            name="MuseumScreen" 
                            component={MuseumScreen} 
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                            name="LegendsScreen" 
                            component={LegendsScreen} 
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                            name="PlacesScreen" 
                            component={PlacesScreen} 
                            options={{ headerShown: false }} 
                        />
                    </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
