import React from 'react'
import { createContext, useState, useEffect } from 'react'
import Todos from '../data/todos.json'

const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [todos, setTodos] = useState(Todos)

  const [editTodo, setEditTodo] = useState({
    todo: {},
    edit: false,
  })

  useEffect(() => {
    getTodoList()
  }, [])

  // This function fetches the list from server
  const getTodoList = () => {
    setTodos(Todos)
    setIsLoading(false)
  }

  // Adding task to list
  const addTodoToList = (task) => {
    setTodos((previousState) => [
      ...previousState,
      { id: previousState.length, task: task, completed: false },
    ])
  }

  // Deleting a todo completely
  const deleteTodo = (id) => {
    const newTodosArray = todos.filter((todo) => todo.id !== id)
    setTodos(newTodosArray)
  }

  // Setting completed field to true, does not delete
  const completeTodo = (id) => {
    const newTodosArray = todos.map((todo) => {
      if (todo.id !== id) return todo
      return { ...todo, completed: true }
    })
    setTodos(newTodosArray)
  }

  // Updating a task in todo
  const updateTodo = (id, task) => {
    const newTodosArray = todos.map((todo) => {
      if (todo.id !== id) return todo
      return { ...todo, task }
    })
    setTodos(newTodosArray)
  }

  return (
    <TodoContext.Provider
      value={{
        isLoading,
        todos,
        setTodos,
        addTodoToList,
        deleteTodo,
        completeTodo,
        updateTodo,
        editTodo,
        setEditTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContext
