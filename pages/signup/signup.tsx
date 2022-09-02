import React, { useState } from "react"
import styles from "./styles";
import { useNavigation } from '@react-navigation/native'
import {
  TouchableOpacity,
  Text,
  View,
  TextInput
} from 'react-native';

export default function SignUp(){
  const navigation = useNavigation()

  return(
    <View style={styles.body}>
      <View style={styles.mainContainer}>
        <Text style={styles.textLogo}>Game Matcher</Text>

        <Text style={styles.textSignUp}>Create Account</Text>

        <View style={styles.container}>
          <TextInput
            style={[styles.usernameInput, styles.shadowProp]}
            placeholder={'Username'}
          />
        </View>

        <View style={styles.container}>
          <TextInput
            style={[styles.usernameInput, styles.shadowProp]}
            placeholder={'Email Address'}
          />
        </View>

        <View style={styles.container}>
          <TextInput
            style={[styles.usernameInput, styles.shadowProp]}
            placeholder={'Password'}
          />
        </View>

        <View style={styles.container}>
          <TextInput
            style={[styles.usernameInput, styles.shadowProp]}
            placeholder={'Confirm Password'}
          />
        </View>

        <View style={styles.signUpContainer}>
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.signupText}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.haveAccount}>
          <Text>Already have an account?</Text>

          <TouchableOpacity onPress={() => navigation.navigate('signin')}>

            <Text style={styles.signinText}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}