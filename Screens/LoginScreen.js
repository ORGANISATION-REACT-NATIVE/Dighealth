import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose en account type</Text>
      <View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  title:{
    fontSize: 25,
    fontWeight: '500'
  },
})
