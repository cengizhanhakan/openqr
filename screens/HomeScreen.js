import React,{  } from 'react';
import { Image, StyleSheet, View} from 'react-native';
import GradientButton from '../components/GradientButton';
import appIcon from '../assets/images/icon.png';

export default function HomeScreen({ navigation: { navigate } }) {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={appIcon} />
            <GradientButton text='Scan' onPress={() => navigate('Camera')} />
            <GradientButton text='Previous Scans' onPress={() => navigate('PreviousScans')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    logo:{
        width:'100%',
        height:'50%',
    },
});
