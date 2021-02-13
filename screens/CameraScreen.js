import React, { useState, useEffect } from 'react';
import { Text, View ,Alert, Image,Dimensions,Button,StyleSheet,Linking} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import * as SecureStore from 'expo-secure-store';



export default function CameraScreen() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    const requestPermission = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
    };

    useEffect(() => {
        requestPermission();
    }, []);

    const onSuccess = async (url) => {
        let allRecords = await SecureStore.getItemAsync('records');
        let allRecordsParsed = JSON.parse(allRecords);
        let record = {
            url,
            id: allRecords ? `${parseInt(allRecordsParsed[allRecordsParsed.length-1].id)+1}` : '0'
        };
        if(!allRecords) {
            let newRecordArray = [record];
            await SecureStore.setItemAsync('records',JSON.stringify(newRecordArray));
        } else {
            await SecureStore.deleteItemAsync('records');
            allRecordsParsed.push(record);
            await SecureStore.setItemAsync('records',JSON.stringify(allRecordsParsed));
        }
        return await Linking.openURL(okButton.url);
    };

    const okButton = {url:'',text: 'GO TO WEBSITE',onPress: async () => await onSuccess(okButton.url)};
    const cancelButton = {
        text: 'CANCEL',
        style: 'cancel'
    };
    const width = Dimensions.get('window').width * 0.8;
    const height = Dimensions.get('window').height * 0.45;


    const handleBarCodeScanned = async ({ data }) => {
        setScanned(true);
        Reflect.set(okButton,'url',data);
        return Alert.alert('Success',`Bar code has been scanned! : ${data}`,[okButton,cancelButton]);
    };

    if (hasPermission === null) {
        return <View style={styles.errors}><Text>Requesting for camera permission</Text></View>;
    }
    if (hasPermission === false) {
        return <View style={styles.errors}><Text>No access to camera</Text></View>;
    }

    return (
        <View style={{flex: 1}}>
            <Camera style={{flex: 1}} onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}>
                <View
                    style={{
                        flex: 1,
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                    <Image source={require('../assets/images/blackberry.png')} style={{width:width,height:height}} />
                </View>
            </Camera>
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
    );
}

const styles = StyleSheet.create({
    errors:{
        alignSelf:'center',
        justifyContent:'center'
    }
});
