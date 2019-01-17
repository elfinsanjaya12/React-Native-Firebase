import React, {Component} from 'react';
import TodoList from '../components/TodoList'

class Home extends Component {
    static navigationOptions = {
        title: 'To Do - Home',
        headerStyle: {
         backgroundColor: '#D50000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
    render(){
        console.ignoredYellowBox = ['Setting a timer'];

        return <TodoList navigate={ this.props.navigation} ></TodoList>
    }
}

export default Home