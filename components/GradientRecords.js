import * as React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import {Text,TouchableOpacity,StyleSheet,Dimensions} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';




export default function GradientRecords({url,id,onPress}) {
    return (
        <TouchableOpacity style={{marginTop:'2%'}} onPress={onPress}>
            <LinearGradient colors={['#009de0', '#007fb6', '#006b9b']} style={{height:Dimensions.get('window').height / 12,justifyContent:'center',width:Dimensions.get('window').width * 0.85}}>
                <Text style={styles.title}>{url}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    title: {
        fontFamily:'roboto-light',
        fontSize: RFValue(15),
        color:'#FFF',
        textAlign:'center'
    },
});
