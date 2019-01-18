import React, {Component } from 'react'
import { StyleSheet, View, TextInput, FlatList, TouchableNativeFeedback, Alert } from 'react-native';
import { Text, Button, Card, Divider, Icon } from 'react-native-elements';
import firebase from '../firebase'

class TodoEdit extends Component {
  constructor(props){
    // pasing data text dan description yang ditampung di todoList
    const { text, description } = props.navigate.state.params.todoList
		super(props)
		this.state = {
      todoTitle: text,
      todoDescription: description,
		}
  }

  updateTodo = (key) => {
    const { todoTitle, todoDescription } = this.state
    firebase.database().ref('todos/' + key).set({
      todoTitle: todoTitle,
      todoDescription: todoDescription,
    })
    Alert.alert('Berhasil', 'Todo Berhasil Diubah')
    this.props.navigate.navigate('Home')
  }

  
  render() {
    const { key } = this.props.navigate.state.params.todoList
    const { todoTitle, todoDescription } = this.state
    console.log('key: ' + key + 'judul: ' + todoTitle + 'deskripsi: ' + todoDescription)
    return (
      <TouchableNativeFeedback>
        <View style={styles.container} >

          <Card>
            <Text style={{color: '#00BCD4'}}> Todo Title </Text>
            <TextInput style={{height: 35}}
              onChangeText={(value) => this.setState({todoTitle: value})}
              value={todoTitle}
            />
          </Card>

          <Card>
            <Text style={{color: '#00BCD4'}}> Todo Description </Text>
            <TextInput style={{height: 300}}
              editable = {true}
              multiline = {true}
              numberOfLines = {10}
              onChangeText={(value) => this.setState({todoDescription: value})}
              value={todoDescription}
            />
          </Card>

          <Card style={{position:'absolute', bottom:0,}}>
            <Button
              backgroundColor='#03A9F4'
              buttonStyle={styles.buttonStyle}
              title="EDIT TODO"
              onPress={() => this.updateTodo(key)}/>
          </Card>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: '#E0E0E0',
  },
  todoColumn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
	inputBox: {
		height: 40,
		borderWidth: 1,
		borderColor: 'gray',
		borderRadius: 5,
	},
  buttonStyle: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  }
});

export default TodoEdit