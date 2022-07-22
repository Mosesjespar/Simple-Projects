import React, { useState } from 'react';
import { StyleSheet, Alert, View, FlatList, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

  const handlePress = (key) => {
    setTodos((currentTodos) => {
      return currentTodos.filter(todo => todo.key !== key)
    })
  }

  const submitTodo = (text) => {
    if (text.length > 3) {
      setTodos(prevTodos => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else {
      Alert.alert('OOPS', 'Todo must be over 3 characters long', [
        { text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitTodo={submitTodo} />
          <ScrollView>
            <View style={styles.list}>

              <FlatList
                data={todos}
                renderItem={({ item }) => (

                  <TodoItem item={item} handlePress={handlePress} />

                )}
              />

            </View>
          </ScrollView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 10,
    flex: 1,
  },
});