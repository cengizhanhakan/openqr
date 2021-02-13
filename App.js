import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import StackNavigator from './navigation/StackNavigator';

export default function App(props) {
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);
    React.useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHide();
                await Font.loadAsync({
                    'roboto-light': require('./assets/fonts/Roboto-Light.ttf'),
                });
            } catch (e) { return e;
            } finally {
                setLoadingComplete(true);
                SplashScreen.hide();
            }
        }
        loadResourcesAndDataAsync();
    }, []);

    if (!isLoadingComplete && !props.skipLoadingScreen) {
        return null;
    } else {
        return (
            <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                <StackNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});