import React from 'react'
import { View, ScrollView, Pressable } from 'react-native'
import AddTodoForm from './components/AddTodoForm.js'
import CompletedTodos from './components/CompletedTodos.js'
import Header from './components/Header.js'
import TodoList from './components/TodoList.js'
import { TodoProvider } from './context/TodoContext'

export default function Home() {
  return (
    <TodoProvider>
      <View>
        <Header />
        <AddTodoForm />
        <ScrollView style={{ height: 1000 }}>
          <TodoList />
          <CompletedTodos />
        </ScrollView>
      </View>
    </TodoProvider>
  )
}
