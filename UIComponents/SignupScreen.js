import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function SignupScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>{'< Back'}</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Create Account</Text>

      <TextInput style={styles.input} placeholder="First name" />
      <TextInput style={styles.input} placeholder="Last name" />
      <TextInput style={styles.input} placeholder="Voter card number" />
      <TextInput style={styles.input} placeholder="Phone number" keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TextInput style={styles.input} placeholder="Repeat password" secureTextEntry />

      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => navigation.navigate('OTPVerification')}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
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
    padding: 20,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  backText: {
    color: '#6C63FF',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4A4A4A',
  },
  input: {
    width: '100%',
    borderWidth:1,
    borderColor:'#6C63FF',
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  signupButton: {
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
});
