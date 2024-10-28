import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import places from '../constants/places.js';
import Icons from './Icons';

const { height, width } = Dimensions.get('window');

const Places = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % places.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + places.length) % places.length);
    };

    const renderAttractions = (attractions) => (
        attractions.map((attraction, index) => (
            <View key={index} style={styles.attraction}>
                <Text style={styles.attractionName}>{attraction.name}</Text>
                <Text style={styles.attractionDescription}>{attraction.description}</Text>
            </View>
        ))
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>What to visit ?</Text>

            <View style={styles.card}>
                <Image source={places[currentIndex].image} style={styles.image} />
                <Text style={styles.cityName}>{places[currentIndex].city}</Text>

                <ScrollView style={styles.attractionsContainer}>
                    <Text style={styles.description}>{places[currentIndex].description}</Text>
                    {renderAttractions(places[currentIndex].attractions)}
                </ScrollView>
            </View>

            <View style={styles.arrowsContainer}>
            <TouchableOpacity style={styles.leftArrow} onPress={handlePrevious}>
                <Icons type={'arrow'}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightArrow} onPress={handleNext}>
            <Icons type={'arrow'}/>
            </TouchableOpacity>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: height * 0.07,
        paddingBottom: height * 0.2,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#990000',
        marginBottom: height * 0.03
    },
    card: {
        width: '95%',
        height: height * 0.7,
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 15,
        alignItems: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    cityName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    description: {
        fontSize: 16,
        color: '#333',
        textAlign: 'justify',
        marginBottom: 10,
    },
    attractionsContainer: {
        width: '100%',
        marginTop: 10,
    },
    attraction: {
        marginVertical: 5,
    },
    attractionName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 5
    },
    attractionDescription: {
        fontSize: 15,
        color: '#555',
        textAlign: 'justify'
    },
    arrowsContainer: {
        width: width * 0.92,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        position: 'absolute',
        top: height * 0.39
    },
    leftArrow: {
        padding: 10,
        transform: [{ rotate: '180deg' }],
        width: 70,
        height: 70
    },
    rightArrow: {
        padding: 10,
        width: 70,
        height: 70
    }
});

export default Places;
