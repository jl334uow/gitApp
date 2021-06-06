import React from 'react';
import { Pressable, TextInput, View, StyleSheet } from 'react-native';
import {Formik, useField} from 'formik';
import Text from './Text';
import * as yup from 'yup';

const styles = StyleSheet.create({
  signInButton: {
    backgroundColor: '#0366d6',
    width: '20%',
    alignSelf: 'center',
    borderRadius: 5
  },

  formOutline: {
    borderRadius: 5,
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth: 1,
    width: '95%',
    alignSelf: 'center'
    
  },
  emptySpacing:{
    padding: 5
  }
})

const validationSchema = yup.object().shape({
  username: yup.string().required('username is required'),
  password: yup.string().required('password is required')
})

const initialValues = {
  username: '',
  password: ''
}

const onSubmit = (values) => {
  console.log('zubmitted ' + values);
}

const SignInForm = () => {
  const [userField, userMeta, userHelpers] = useField('username')
  const [passField, passMeta, passHelpers] = useField('password')

  return(
    <View>
      <View style = {styles.emptySpacing}/>
      <View style = {styles.formOutline}>
      <TextInput
        placeholder = "Username"
        value = {userField.value}
        onChangeText = {text => userHelpers.setValue(text)}
      />
      </View>
      <View style = {styles.emptySpacing}/>
      <View style = {styles.formOutline}>
      <TextInput
        secureTextEntry = {true}
        placeholder = "Password"
        value = {passField.value}
        onChangeText = {text => passHelpers.setValue(text)}
      />
      </View>
      <View style = {styles.emptySpacing}/>
      <Pressable onPress = {onSubmit(userField.value + passField.value)} style = {styles.signInButton}>
        <Text fontSize = 'subheading' fontWeight = 'bold' color = 'textSecondary' style = {{alignSelf: 'center'}}>Sign in</Text>
      </Pressable>
    </View>
  )
}

const SignIn = () => {
  return(
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema = {validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
};

export default SignIn;