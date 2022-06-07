import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Header() {
  return (
    <View style={styles.logoContainer}>
      <Text style={styles.logo1}>Todo</Text>
      <Text style={styles.logo2}>Assist</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
  },
  logo1: {
    fontSize: 50,
    color: '#1e90ff',
  },
  logo2: {
    fontSize: 50,
    color: '#ff69b4',
  },
})
