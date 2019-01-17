import React from 'react'
import { View, TextInput, StyleSheet, Button, Alert, ScrollView } from 'react-native';
import firebase from '../firebase'


class TodoPageEdit extends React.Component {
  static navigationOptions = {
    title: 'To Do - Edit',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  constructor(props){
    const title = props.navigation.getParam('title')
    const deskripsi = props.navigation.getParam('deskripsi')
    const key = props.navigation.getParam('key')
		super(props)
		this.state = {
      key: key,
      titleEdit: title,
      deskripsiEdit: deskripsi,
    }
	}

  updateTodo = (key) => {
    const { titleEdit, deskripsiEdit } = this.state
   
    firebase.database().ref('todos/' + key).set({
        titleEdit: titleEdit,
        deskripsiEdit: deskripsiEdit,
    })
    Alert.alert('Berhasil', 'Todo Berhasil Diubah')
    this.props.navigation.navigate('Home')
  }

  render() {
    const { titleEdit, deskripsiEdit, key } = this.state
  
    console.log(key)
      return (
        <ScrollView>
        <View style={styles.container}>
            <TextInput
                style={styles.inputBox}  
                placeholder="Title"
                onChangeText={(val) => this.setState({titleEdit: val})}
                value={titleEdit}
            />
            <TextInput
                style={styles.inputBox}  
                placeholder="Deskripsi"
                onChangeText={(val) => this.setState({deskripsiEdit: val})}
                value={deskripsiEdit}
            />
            <Button
              title="Simpan"
              onPress={() => this.updateTodo(key)}
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

export default TodoPageEdit;