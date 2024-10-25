import { View, Text, TouchableOpacity} from "react-native"
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    const [aboutModalVisible, setAboutModalVisible] = useState(false);
    const [settingsModalVisible, setSettingsModalVisible] = useState(false);

    return(
        <View>
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
        </View>
    )
}

export default Home;