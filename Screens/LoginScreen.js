import React from 'react'
import { View, Text, StyleSheet, StatusBar, Image, Button, Linking, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your account type</Text>
      <View style={styles.containerCard}>
        <View style={styles.card}>
          <TouchableOpacity>
            <Image source={{uri: 'https://th.bing.com/th/id/OIP.GUMg6Hb0K1SEO-gUCkwhpgHaHa?pid=ImgDet&w=208&h=208&c=7&dpr=1.5'}} style={{width: 125, height: 130, borderRadius: 10, marginTop: 0, paddingTop: 0}} />
            <Text style={{ position: 'absolute', left: 25, bottom: 0, textAlign: 'center'}}>I'm a patient</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <TouchableOpacity>
            <Image source={{uri: 'https://th.bing.com/th/id/OIP.3AChV9qTonQSmD2lSTezSgHaHa?pid=ImgDet&w=208&h=208&c=7&dpr=1.5'}} style={{width: 125, height: 130, borderRadius: 10, marginTop: 0, paddingTop: 0}} />
            <Text style={{position: 'absolute', left: 25, bottom: 0, textAlign: 'center'}}>I'm a doctor</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.descriptionTesxt}>
        <Text>Welcome in <Text style={{fontWeight: '600'}}>DigHealth</Text>!</Text>
        <Text>Please fill out the form below to get started</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.containerInput}>
          <Entypo name="email" size={24} color="skyblue" style={{ position:'absolute', paddingLeft: 25}} />
          <TextInput placeholder='Email' style={styles.input} />
        </View>
        <View style={styles.containerInput}>
          <MaterialCommunityIcons name="form-textbox-password" size={24} color="skyblue" style={{ position:'absolute', paddingLeft: 25}} />
          <TextInput placeholder='Password' style={styles.input} secureTextEntry={true} />
        </View>
      </View>
      <View style={styles.footerForm}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text>No account?</Text>
          <TouchableOpacity><Text style={{color: 'skyblue', fontWeight: '700'}}>SignUp</Text></TouchableOpacity>
        </View>
        <Button title='LogIn' style={styles.button}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    margin: 20,
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
  card:{
    borderColor: 'skyblue',
    borderRadius: 10,
    borderWidth: 1,
    margin: 1,
    width: '40%',
    height: 130,
    alignItems: 'center',
    margin: 10,
  },
  descriptionTesxt:{
    alignItems: 'center',
    margin: 20
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
  button:{
    padding: 2
  },
  footerForm:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    width: 300,
  }
})
