import React from 'react';
import { StyleSheet, View, FlatList, Text, Button, TextInput } from 'react-native';

class Home extends React.Component {
    static navigationOptions = {
        title : 'Home'
    }

    render() {
        return (
            <View>
                <Text>Ini Halaman Home</Text>
            </View>
        )
    }
}


export default Home