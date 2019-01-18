import React, {Component } from 'react'
import { StyleSheet, View, TextInput, FlatList, TouchableNativeFeedback, Alert } from 'react-native';
import { Text, Button, Card, Divider, Icon } from 'react-native-elements';

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
              value={todoTitle}
            />
          </Card>
          <Card>
            <Text style={{color: '#00BCD4'}}> Todo Description </Text>
            <TextInput style={{height: 300}}
              editable = {true}
              multiline = {true}
              numberOfLines = {10}
              value={todoDescription}
            />
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