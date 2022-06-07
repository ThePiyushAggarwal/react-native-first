import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TodoContext from '../context/TodoContext'
import TodoItem from './TodoItem'

export default function TodoList() {
  const { isLoading, todos } = useContext(TodoContext)

  return (
    <View>
      <Text style={styles.heading}>Todo List</Text>
      {isLoading ? (
        <Text>Spinner....</Text>
      ) : (
        todos?.map((todo) => {
          if (!todo.completed) return <TodoItem todo={todo} key={todo.id} />
        })
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    paddingBottom: 10,
  },
})
