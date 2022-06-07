import React from 'react'
import { SafeAreaView, Platform, StatusBar, StyleSheet } from 'react-native'
import Home from './src/Home.js'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: 10,
  },
})
