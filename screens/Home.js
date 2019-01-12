import React from 'react';
import { StyleSheet, View, FlatList, Text, Button, TextInput } from 'react-native';
import * as firebase from 'firebase';

const config = {
    databaseURL: "https://coba-firebase-2db1f.firebaseio.com",
};
firebase.initializeApp(config);

class Home extends React.Component {
    static navigationOptions = {
        title : 'Home'
    }

    constructor(){
        super();
        this.state = {
            todo: '',
            todos : null
        }
    }

    storeTodo = () => {
        const newTodoKey = firebase.database().ref().child('todos').push().key
        firebase.database().ref('todos/').update({
            [newTodoKey] : this.state.todo          
        });
    }

    componentDidMount() {
       firebase.database().ref('todos/').on('value', (snapshot) => {
            console.log(snapshot.val());
            this.setState({todos: snapshot.val()})
       })
    }

    render() {
        const todos = !this.state.todos ? [] : Object.keys(this.state.todos).map(key => {
            return {
                key: key,
                text: this.state.todos[key]
            }
        })
        return (
            <View style={{ flex: 1, flexDirection: 'column', margin: 32}}>
                <TextInput 
                    placeholder= "New Todo"
                    onChangeText= { (text) => this.setState({todo: text})}
                />
                <Button 
                    title = "Add Todo"
                    onPress={() => this.storeTodo()}
                />
                <FlatList 
                    data={todos}
                    renderItem={({item}) => <Text>{item.text}</Text>}
                />
            </View>
        )
    }
}

export default Home