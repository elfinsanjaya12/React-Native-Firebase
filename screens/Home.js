import React from 'react';
import { StyleSheet, View, FlatList, Text, Button, TextInput } from 'react-native';

class Home extends React.Component {
    static navigationOptions = {
        title : 'Home',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
    
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', margin: 32}}>
                <Button 
                    title = "Tambah Rencana"
                    backgroundColor = '#f4511e'
                    onPress={() => this.props.navigation.navigate('TodoPageAdd')}
                />
            </View>
        )
    }
}

export default Home