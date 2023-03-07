import React from 'react'
import { Text, View, StyleSheet, TextInput, Button, ImageBackground } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function RegisterScreen() {
  return (
    <ImageBackground source={{uri: 'https://img.freepik.com/vecteurs-libre/fond-equipe-infirmiere-dessine-main_52683-9109.jpg?w=740&t=st=1678095928~exp=1678096528~hmac=f4a698be514ccd828f7b6a02f5822bee929bec390f9a9cde50fd5b6b7798c2af'}} style={styles.image} resizeMode="cover">
        <View style={styles.container}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>SignUp</Text>
      <View style={styles.form}>
        <View style={styles.containerInput}>
          <Entypo name="email" size={24} color="skyblue" style={{ position:'absolute', paddingLeft: 25}} />
          <TextInput placeholder='Email' style={styles.input} />
        </View>
        <View style={styles.containerInput}>
          <MaterialCommunityIcons name="form-textbox-password" size={24} color="skyblue" style={{ position:'absolute', paddingLeft: 25}} />
          <TextInput placeholder='Password' style={styles.input} secureTextEntry={true} />
        </View>
        <Button title='Sign Up' />
      </View>
        </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 20,
    marginTop: 80,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  title:{
    fontSize: 20,
    paddingTop: 25,
    fontWeight: '500',
    color: 'skyblue'
  },
  containerCard:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 25,
  },
  form:{

  },
  containerInput:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input:{
    height: 40,
    borderColor: 'skyblue',
    borderRadius: 10,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    paddingLeft:10,
    width: 300,
    textAlign: 'center',
  },
})