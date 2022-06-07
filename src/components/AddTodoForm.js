import React, { useContext, useEffect, useState } from 'react'
import { View, TextInput, StyleSheet, Text, Pressable } from 'react-native'
import TodoContext from '../context/TodoContext'

export default function AddTodoForm() {
  const { setTodos, addTodoToList, editTodo, updateTodo } =
    useContext(TodoContext)
  const [task, setTask] = useState('')

  useEffect(() => {
    if (editTodo.edit) {
      setTask(editTodo.todo.task)
    }
  }, [editTodo])

  return (
    <View style={styles.formContainer}>
      <View>
        <Text style={styles.heading}>Add Todo</Text>
      </View>
      <View style={styles.formContainer2}>
        <View style={styles.inputParent}>
          <TextInput
            style={styles.input}
            onChangeText={(task) => setTask(task)}
            value={task}
          />
        </View>
        <View style={styles.button}>
          {editTodo.edit ? (
            <Pressable
              onPress={() => {
                updateTodo(editTodo.todo.id, task)
                setTask('')
              }}
            >
              <Text style={styles.buttonText}>Update</Text>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                addTodoToList(task)
                setTask('')
              }}
            >
              <Text style={styles.buttonText}>Add Task</Text>
            </Pressable>
          )}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
  },
  formContainer: {
    flexDirection: 'column',
    paddingVertical: 20,
  },
  formContainer2: {
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'space-between',
    height: 75,
  },
  inputParent: {
    borderWidth: 1,
    borderColor: '#000',
    width: '75%',
    paddingLeft: 10,
    justifyContent: 'center',
  },
  input: {
    fontSize: 16,
  },
  button: {
    width: '20%',
    backgroundColor: '#1e90ff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
})
