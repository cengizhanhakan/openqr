import * as React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import {Text,TouchableOpacity,StyleSheet,Dimensions} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';




export default function GradientButton({text,onPress}) {
    return (
        <TouchableOpacity style={{alignItems:'center',justifyContent:'center',width:Dimensions.get('window').width,height:'10%'}} onPress={onPress}>
            <LinearGradient colors={['#009de0', '#007fb6', '#006b9b']} style={{width:'80%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                <Text style={styles.title}>{text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    title: {
        fontFamily:'roboto-light',
        fontSize:RFValue(18),
        color:'#FFF',
    },
});
