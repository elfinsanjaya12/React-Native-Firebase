import React from 'react'
import { StyleSheet, View, TextInput, FlatList, TouchableNativeFeedback, Alert } from 'react-native';
import { Text, Button, Card, Divider, Icon } from 'react-native-elements';
import firebase from './Config'

class TodoAdd extends React.Component {

  constructor(props){
		super(props)
		this.state = {
      todoTitle: '',
      todoDescription: '',
		}
	}

  storeTodo = () => {
    const newTodoKey = firebase.database().ref().child('todos').push().key
    firebase.database().ref('todos/').update({
      [newTodoKey]: this.state
    })
    Alert.alert('Berhasil', 'Todo Berhasil Ditambahkan')
    this.props.navigate.navigate('Home')
  }

  render() {

    return (
        <View>
            <Text>Oke Pindah</Text>
        </View>
    );
  }
}

export default TodoAdd
