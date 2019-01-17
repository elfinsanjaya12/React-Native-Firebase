import React from 'react'
import { View, TextInput, StyleSheet, Button, Alert, ScrollView } from 'react-native';
import firebase from '../firebase'


class TodoPageAdd extends React.Component {
  static navigationOptions = {
    title: 'To Do - Add',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  constructor(){
    super();
    this.state = {
      title : '',
      deskripsi : '',
      todos: null
    }
  }

    // add data
    storeTodo = () => {
        const newTodoKey = firebase.database().ref().child('todos').push().key
        firebase.database().ref('todos/').update({
            [newTodoKey] : this.state
        });
        Alert.alert('Berhasil', 'Todo Berhasil Ditambahkan')
        this.props.navigation.navigate('Home')
    }

  render() {
      return (
        <ScrollView>
        <View style={styles.container}>
            <TextInput
                style={styles.inputBox}  
                placeholder="Title"
                onChangeText={(text) => this.setState({title: text})}
            />
            <TextInput
                style={styles.inputBox}  
                placeholder="Deskripsi"
                onChangeText={(text) => this.setState({deskripsi: text})}
            />
            <Button
              title="Simpan"
              onPress={() => this.storeTodo()}
            />
      </View>
      </ScrollView>
      )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', margin: 32
  },
  inputBox: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    padding: 12,
    margin:6

  }
});

export default TodoPageAdd;