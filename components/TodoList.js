import React from 'react';
import { StyleSheet, View, FlatList, Alert, ActivityIndicator, Text, ScrollView } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements'

class TodoList extends React.Component {
    render() {
        return (
            <Card>
              <Button
                icon={<Icon name='add' color='#ffffff' />}
                backgroundColor='#D50000'
                buttonStyle={styles.buttonStyle}
                title="Add Todo"
                onPress={() => this.props.navigate.navigate("TodoPage")} />
            </Card>
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