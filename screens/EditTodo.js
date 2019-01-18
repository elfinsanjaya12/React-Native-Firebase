import React, { Component } from 'react';
import TodoEdit from '../components/TodoEdit';

class EditTodo extends Component {
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
        return <TodoEdit navigate={this.props.navigation} ></TodoEdit>
    }
}
export default EditTodo;