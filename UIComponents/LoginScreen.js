import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome  to  MyVote</Text>
      <TextInput style={styles.input} placeholder="Voter card number" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.replace('TabNavigator')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom:30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4A4A4A',
  },
  input: {
    width: '90%',
    borderWidth:1,
    borderColor:'#6C63FF',
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
    marginVertical: 20,
  },
  loginButton: {
    backgroundColor: '#6C63FF',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupButton: {
    marginTop: 20,
    borderColor: '#6C63FF',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 10,
  },
  signupText: {
    color: '#6C63FF',
    fontSize: 16,
  },
});
