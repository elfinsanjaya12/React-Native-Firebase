import React, { Component } from 'react';
import TodoAdd from '../components/TodoAdd';

class TodoPage extends Component {
    static navigationOptions = {
        title: 'To Do - Add',
        headerStyle: {
         backgroundColor: '#D50000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
    render(){
        return <TodoAdd navigate={this.props.navigation} ></TodoAdd>
    }
}
export default TodoPage;