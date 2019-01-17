import React from 'react';
import { StyleSheet, View, FlatList, Alert, ActivityIndicator, Text, ScrollView } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import Accordion from 'react-native-collapsible/Accordion';
import firebase from '../firebase'
import List from './List'

class TodoList extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        todo : '',
        loadData : true,
        todos : null
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
  

    render() {
      const { loadData } = this.state
      const todos = !this.state.todos ? [] : Object.keys(this.state.todos).map( key => {
        return {
          key: key,
          text: this.state.todos[key].todoTitle,
          description: this.state.todos[key].todoDescription,
        }})
      return (
        <ScrollView style={styles.container}>
          <Card>
            <Button
              icon={<Icon name='add' color='#ffffff' />}
              backgroundColor='#D50000'
              buttonStyle={styles.buttonStyle}
              title="Add Todo"
              onPress={() => this.props.navigate.navigate("TodoPage")} />
          </Card>
           <Card title="DAFTAR TODO">
            <Accordion
              sections={todos}
              renderHeader={this.renderHeader}
              renderContent={this.renderContent}
            />  
          </Card>

          {
            loadData && <View style={styles.horizontal}>
                          <ActivityIndicator size="large" color="#0000ff" />
                        </View>
          }
          </ScrollView>
      )
    }
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: '#E0E0E0',
  },
  buttonStyle: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  }
});

export default TodoList