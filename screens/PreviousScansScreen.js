import * as React from 'react';
import { StyleSheet, View,FlatList, ActivityIndicator, Linking} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import GradientRecords from '../components/GradientRecords';

export default function PreviousScansScreen() {
    const [loading,setLoading] = React.useState(false);
    const [data,setData] = React.useState([]);
    const [refreshing, setRefreshing] = React.useState(false);

    const fetchRecords = async () => {
        try {
            setLoading(true);
            setRefreshing(true);
            const records = await SecureStore.getItemAsync('records');
            setData(JSON.parse(records));
            setRefreshing(false);
            return setLoading(false);
        }
        catch (err) {
            return err.msg;
        }
    };
    React.useEffect(() => {
        fetchRecords();
    },[]);

    const renderItem = ({ item }) => {
        return (
            <GradientRecords onPress={async () => await Linking.openURL(item.url)} id={item.id} url={item.url} />
        );
    };

    return (
        <View style={styles.container}>
            {loading || refreshing ? <ActivityIndicator /> :
                <FlatList style={{marginTop:'2%'}}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    onRefresh={fetchRecords}
                    refreshing={refreshing}
                />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent:'center'
    },
});
