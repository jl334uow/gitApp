import React from 'react';
import { Pressable, TextInput, View } from 'react-native';
import {Formik, useField} from 'formik';
import Text from './Text';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  username: yup.string().required('username is required'),
  password: yup.string().required('password is required')
})

const initialValues = {
  username: '',
  password: ''
}

const onSubmit = (values) => {
  console.log(values);
}

const SignInForm = () => {
  const [userField, userMeta, userHelpers] = useField('username')
  const [passField, passMeta, passHelpers] = useField('password')

  return(
    <View>
      <TextInput
        placeholder = "Username"
        value = {userField.value}
        onChangeText = {text => userHelpers.setValue(text)}
      />
      <TextInput
        placeholder = "Password"
        value = {passField.value}
        onChangeText = {text => passHelpers.setValue(text)}
      />
      <Pressable onPress = {onSubmit}>
        <Text>Submit</Text>
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