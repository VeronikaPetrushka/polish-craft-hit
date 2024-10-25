import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions} from "react-native"
import { useNavigation } from '@react-navigation/native';
// import { MusicProvider } from '../constants/music';
// import MusicPlayer from './MusicPlayer';
import AboutModal from './AboutModal';
import SettingsModal from './SettingsModal';

const { height } = Dimensions.get('window');

const Home = () => {
    const navigation = useNavigation();
    const [aboutModalVisible, setAboutModalVisible] = useState(false);
    const [settingsModalVisible, setSettingsModalVisible] = useState(false);

    return(
        // <MusicProvider>
        // <MusicPlayer />
        <View style={styles.container}>
            <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('DailyGameScreen')}>
                <Text style={styles.btnTxt}>Daily game</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => setAboutModalVisible(true)}>
                <Text style={styles.btnTxt}>About us</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => setSettingsModalVisible(true)}>
                <Text style={styles.btnTxt}>Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnFolders} onPress={() => navigation.navigate('FoldersScreen')}>
                <Text style={styles.btnTxt}>Folders</Text>
            </TouchableOpacity>

            <AboutModal visible={aboutModalVisible} onClose={() => setAboutModalVisible(false)}/>
            <SettingsModal visible={settingsModalVisible} onClose={() => setSettingsModalVisible(false)}/>
            </View>
        </View>
        // </MusicProvider>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },

    btnContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    btn: {
        padding: 12,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '47%',
        height: 150,
        borderWidth: 2,
        borderColor: '#e1251b',
        backgroundColor: ('rgba(255, 37, 27, 0.3)'),
        borderRadius: 12,
        marginBottom: 10,
        zIndex: 10
    },

    btnFolders: {
        padding: 12,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '47%',
        height: 150,
        borderWidth: 2,
        borderColor: '#e1251b',
        backgroundColor: ('rgba(255, 37, 27, 0.3)'),
        borderRadius: 12,
        marginBottom: 10,
        marginTop: height * 0.03,
        zIndex: 10
    },

    btnTxt: {
        fontSize: 20,
        color: '#e1251b',
        fontWeight: '600'
    },

});

export default Home;