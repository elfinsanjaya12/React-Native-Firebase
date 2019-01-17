import React from 'react';
import {StyleSheet, View, FlatList, Text, Button, TouchableNativeFeedback, Alert} from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import firebase from '../firebase';

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
    
    constructor(){
        super();
        this.state = {
            todos : null
        }
    }

    // tampilkan data dari database
     componentDidMount() {
        firebase.database().ref('todos/').on('value', (snapshot) => {
          const todosFiles = snapshot.val();
          this.setState({todos: todosFiles})
        })
    }
    
    // hapus data
      removeTodo = (key) => {
        firebase.database().ref('todos/' + key).remove();
    }

    render() {
        
        // ubah object kedalam array
        const todos = !this.state.todos ? [] : Object.keys(this.state.todos).map( key => {
            return {
                key: key,
                text: this.state.todos[key].title,
                deskripsi: this.state.todos[key].deskripsi               
            }
        })
        console.ignoredYellowBox = ['Setting a timer'];
        return (
            <View style={{ flex: 1, flexDirection: 'column', margin: 32}}>
                <Button 
                    title = "Tambah Rencana"
                    backgroundColor = '#f4511e'
                    onPress={() => this.props.navigation.navigate('TodoPageAdd')}
                />
                <FlatList 
                    data={todos}
                    renderItem={({item}) => {
                        return (
                            <View  style={styles.newsBlock}>
                                <View style={styles.todoList}>
                                    <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 7 }}> {item.text} </Text>
                                    <Text>{item.deskripsi}</Text>
                                    <Icon name='edit'
                                        type='materialIcons'
                                        color='#4CAF50'
                                        onPress={() => this.props.navigation.navigate('TodoPageEdit', 
                                            {
                                                key: item.key,
                                                title: item.text,
                                                deskripsi: item.deskripsi
                                            }
                                        )}
                                    />
                                    <Text h1>|</Text>
                                    <TouchableNativeFeedback>
                                        <Icon name='delete'
                                        type='materialIcons'
                                        color='#FF5722'
                                        onPress={() => this.removeTodo(item.key)}
                                        />
                                    </TouchableNativeFeedback>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#eceff5',
      alignItems: 'center',
    },
    newsBlock: {
      flexDirection: 'column',
      backgroundColor: '#c6cddf',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-start',
      borderRadius: 3,
      marginTop: 10,
      padding: 8
    },
    newsTitle: {
      alignItems: 'flex-start',
      padding: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#eeeeee',
    },
    newsDesc: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 8,
    },
  todoList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Home