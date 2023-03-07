import React from 'react'
import { View, Text, Image } from 'react-native'

export default function PatientHomeScreen() {
  return (
    <View>
        <Image source={{uri: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhdGllbnQlMjBhZnJpY2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'}} style={{height: 200, width: 200}} />
        <Text>Hello</Text>
        {/*show Image */}
    </View>
  )
}
