import React, { useContext } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import TodoContext from '../context/TodoContext'
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function TodoList({ todo }) {
  const { deleteTodo, completeTodo, setEditTodo } = useContext(TodoContext)

  return (
    <View style={styles.taskContainer}>
      <Text style={styles.task}>{todo.task}</Text>
      <View style={styles.taskActionsContainer}>
        <Pressable onPress={() => completeTodo(todo.id)} style={styles.button}>
          <FontAwesome name="check-square" size={32} color="green" />
        </Pressable>
        <Pressable
          onPress={() => setEditTodo({ todo, edit: true })}
          style={styles.button}
        >
          <FontAwesome name="edit" size={32} color="green" />
        </Pressable>
        <Pressable onPress={() => deleteTodo(todo.id)} style={styles.button}>
          <FontAwesome name="trash" size={32} color="green" />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  taskContainer: {
    marginBottom: 10,
    padding: 16,
    borderLeftColor: 'pink',
    borderLeftWidth: 3,
    backgroundColor: '#f5f5f5',
  },
  task: {
    fontSize: 16,
  },
  taskActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 20,
  },
  button: {
    paddingHorizontal: 5,
  },
})
