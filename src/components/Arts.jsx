import React, { useState } from "react";
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, Text, ImageBackground, ScrollView } from "react-native"
import { useNavigation } from '@react-navigation/native';
import arts from "../constants/arts.js";
import Icons from "./Icons";

const { height , width} = Dimensions.get('window');

const Arts = () => {
    const navigation = useNavigation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isReviewing, setIsReviewing] = useState(false);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % arts.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + arts.length) % arts.length);
    };

    const startReview = () => {
        setIsReviewing(true);
    };

    const goBack = () => {
        setIsReviewing(false);
    };

    return (
        <ImageBackground source={require('../assets/back/arts.png')} style={{ flex: 1 }}>
        <View style={styles.container}>
        {isReviewing ? (
                    <View style={styles.reviewContainer}>
                        <Text style={styles.artsReviewName}>{arts[currentIndex].name}</Text>
                        <ScrollView>
                            <Text style={styles.artsHistory}>{arts[currentIndex].history}</Text>
                            <View style={{width: '100%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                                <TouchableOpacity style={styles.btnBack} onPress={goBack}>
                                    <Text style={styles.btnReviewText}>Go Back</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={styles.quizBtn} 
                                    onPress={() => navigation.navigate('QuizScreen', {
                                        name: arts[currentIndex].name,
                                        quiz: arts[currentIndex].quiz
                                    })}>
                                    <Text style={styles.btnReviewText}>Start quiz</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                ) : (
                    <>
            <Text style={styles.title}>Choose a room to view Polish crafts</Text>
            <View style={styles.doorContainer}>
                <Image source={require('../assets/arts/door-2.png')} style={styles.doorImg}/>
                <View style={styles.arrowsContainer}>
                    <TouchableOpacity style={styles.leftArrow} onPress={handlePrevious}>
                        <Icons type={'arrow'}/>
                    </TouchableOpacity>

                            <View style={{alignItems: 'center'}}>
                                <Text style={styles.artsName}>{arts[currentIndex].name}</Text>
                                <View style={styles.artsImgContainer}>
                                    <Image source={arts[currentIndex].image} style={styles.artsImg}/>
                                </View>
                                <TouchableOpacity style={styles.btnReview} onPress={startReview}>
                                    <Text style={styles.btnReviewText}>Start review</Text>
                                </TouchableOpacity>
                            </View>

                    <TouchableOpacity style={styles.rightArrow} onPress={handleNext}>
                        <Icons type={'arrow'}/>
                    </TouchableOpacity>
                </View>
            </View>
            </>
                )}
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        paddingTop: height * 0.07
    },

    reviewContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        height: height * 0.77,
        width: '100%',
        padding: 15
    },
    artsReviewName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#274e13',
    },

    artsHistory: {
        fontSize: 18,
        color: '#274e13',
        textAlign: 'center',
        marginVertical: 20,
        paddingHorizontal: 20
    },

    title: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: height * 0.08,
        marginTop: height * 0.1,
        color: '#274e13'
    },

    doorContainer: {
        width: width * 0.9,
        height: 400,
        alignItems: 'center',
        justifyContent: 'center'
    },

    doorImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },

    arrowsContainer: {
        width: width * 0.92,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        position: 'absolute',
        bottom: -10
    },

    leftArrow: {
        width: 70,
        height: 70,
        transform: [{ rotate: '180deg' }],
        padding: 10
    },

    rightArrow: {
        width: 70,
        height: 70,
        padding: 10
    },

    artsName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: height * 0.06,
    },

    artsImgContainer: {
        width: height * 0.12,
        height: height * 0.12,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: height * 0.1
    },

    artsImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },

    btnReview: {
        width: 200,
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#434929'
    },

    btnReviewText: {
        fontSize: 17,
        fontWeight: 300,
        color: '#fff'
    },
    
    btnBack: {
        width: '48%',
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#434929'
    },

    quizBtn: {
        width: '48%',
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5d6b23'
    }
})

export default Arts;