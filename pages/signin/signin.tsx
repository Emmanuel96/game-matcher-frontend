import React, { useState, useEffect} from "react"
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Alert
} from 'react-native'

export default function SignIn() {
  const navigation = useNavigation()

  return(
    <View style={styles.body}>
      <View style={styles.mainContainer}>
        <Text style={styles.textLogo}>
          Game Matcher
        </Text>

        <Text style={styles.textLogin}>
          Login to your Account
        </Text>

        <View style={styles.container}>
          <TextInput
            style={[styles.usernameInput, styles.shadowProp]}
            placeholder={'Username or email'}
            placeholderTextColor={"grey"}
          />
        </View>

        <View style={styles.container}>
          <TextInput
            style={[styles.usernameInput, styles.shadowProp]}
            placeholder={'Password'}
            placeholderTextColor={"grey"}
            secureTextEntry={true}
          />
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.signinText}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.forgotPasswordContainer}>
          <Text>Forgot Password?</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('reset-password')}
            style={styles.clickHereContainer}>
            <Text style={styles.clickHereText}>
              Click here
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.noAccountText}>
          <Text>Don't have an account?</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('signup')}
            style={styles.signupContainer}>
            <Text style={styles.color}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}