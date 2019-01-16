import React from 'react';
import { StyleSheet, View, TouchableNativeFeedback, Alert } from 'react-native';
import { Text, Button, Card, Icon, ListItem } from 'react-native-elements';
import firebase from '../firebase';

class List extends React.Component {

    render(){
        const { list, navigate } = this.props
        return(
            <View>
                <View style={{width: 250}}>
                    <ListItem
                        key={list.key}
                        title={list.text}
                    />
                </View>
            </View>
        )
    }
}

export default List