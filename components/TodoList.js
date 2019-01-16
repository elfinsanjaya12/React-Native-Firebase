import React from 'react';
import firebase from '../firebase';
import { StyleSheet, View, FlatList, Alert, ActivityIndicator, Text, ScrollView } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import List from '../components/List'
import {Accordion} from 'react-native-accordion';


class TodoList extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        todo: '',
        loadData: true,
        todos: null
      }
      this.renderHeader = this.renderHeader.bind(this)
    }

    componentDidMount() {
      firebase.database().ref('todos/').on('value', (snapshot) => {
        const todosFiles = snapshot.val();

        this.setState({todos: todosFiles, loadData: false})
      })

    }

    renderHeader(todos) {
      return (
        <List list={todos} navigate={ this.props.navigate } />
      );
    }

    renderContent(todos) {
      return (
        <View style={styles.panel}>
          <Text>{todos.description}</Text>
        </View>
      );
    }

    deleteTodo = (key) => {
      firebase.database().ref('todos/'+ key).remove()
    }

    render() {
        const { navigate } = this.props.navigate
        const todos = !this.state.todos ? [] : Object.keys(this.state.todos).map( key => {
        return {
            key: key,
            text: this.state.todos[key].todoTitle,
            description: this.state.todos[key].todoDescription,
          }
        })

        return (
            <ScrollView style={styles.container} >

            <Card>
              <Button
                icon={<Icon name='add' color='#ffffff' />}
                backgroundColor='#000000'
                buttonStyle={styles.buttonStyle}
                title="Add Todo"
                onPress={() => console.log("Ini Saya Pencet Bisa Bro")}/>
            </Card>

              {/* Menampilkan isi dari firebase todos */}
              <Card title="Rencana Harian">
                <Accordion
                  sections={todos}
                  renderHeader={this.renderHeader}
                  renderContent={this.renderContent}
                />
              </Card>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
          backgroundColor: '#E0E0E0',
    },
    todoList: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    buttonStyle: {
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10
    },
    panel: {
      paddingLeft: 80,
      paddingTop: 5,
      paddingBottom: 5,
      backgroundColor: "white",
      overflow: "hidden",
    }
  });
  

export default TodoList