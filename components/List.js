import React from 'react';
import { StyleSheet, View, TouchableNativeFeedback, Alert } from 'react-native';
import { Text, Icon, ListItem } from 'react-native-elements';
import firebase from '../firebase';

class List extends React.Component {
    // fungsi delete
    deleteTodo = (key) => {
      firebase.database().ref('todos/' + key).remove()
      Alert.alert('Berhasil', 'Todo Berhasil Dihapus')
    }    

    render(){   
        const { list, navigate } = this.props
        return(
            <View style={styles.todoList}>
            <Icon name='edit'
              type='materialIcons'
              color='#4CAF50'
              onPress={() => navigate.navigate("EditTodo",{todoList: list})}
            />

            <Text h1>|</Text>

            <TouchableNativeFeedback>
            <Icon name='delete'
              type='materialIcons'
              color='#FF5722'
              onPress={() => this.deleteTodo(list.key)}
            />
            </TouchableNativeFeedback>

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

const styles = StyleSheet.create({
    todoList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default List