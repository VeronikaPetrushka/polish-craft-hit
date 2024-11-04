import React, { useState, useEffect, useRef } from 'react';
import { Animated, View, ImageBackground, StyleSheet } from 'react-native';
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
import MapScreen from './src/screens/MapScreen';

enableScreens();

const Stack = createStackNavigator();


const App = () => {
    const [loaderIsEnded, setLoaderIsEnded] = useState(false);
    const [prog, setProg] = useState(0);
  
    const firstImageAnim = useRef(new Animated.Value(0)).current;
    const loaderImageAnim = useRef(new Animated.Value(0)).current;

    const firstLoaderImage = require('./src/assets/newDiz/loader1.png');
    const loaderImage = require('./src/assets/newDiz/loader2.png');

    useEffect(() => {
        Animated.timing(firstImageAnim, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
        }).start(() => {
                Animated.timing(loaderImageAnim, {
                    toValue: 1,
                    duration: 2000,
                    useNativeDriver: true,
                }).start(() => {
                        setLoaderIsEnded(true);
                });
        });
    }, []);
  
    return (
        <NavigationContainer>
            {
                !loaderIsEnded ? (
                    <View style={{ flex: 1 }}>
                        <ImageBackground style={{ flex: 1 }} source={loaderImage}>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                                <Animated.View style={[styles.imageContainer, { opacity: firstImageAnim }]}>
                                    <ImageBackground source={firstLoaderImage} style={styles.image} />
                                </Animated.View>

                                <Animated.View style={[styles.imageContainer, { opacity: loaderImageAnim }]}>
                                    <ImageBackground source={loaderImage} style={styles.image} />
                                </Animated.View>
                                
                            </View>
                        </ImageBackground>
                    </View>
                ) : (
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
                        <Stack.Screen 
                            name="MapScreen" 
                            component={MapScreen} 
                            options={{ headerShown: false }} 
                        />
                    </Stack.Navigator>
                    )
                }
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;
