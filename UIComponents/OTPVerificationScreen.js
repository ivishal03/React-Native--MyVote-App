import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function OTPVerificationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>{'< Back'}</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Almost there</Text>
      <Text style={styles.subtitle}>
        Please enter the 6-digit code sent to +285 84 372 9360 for verification
      </Text>

      <View style={styles.otpContainer}>
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              maxLength={1}
              keyboardType="number-pad"
            />
          ))}
      </View>

      <TouchableOpacity
        style={styles.verifyButton}
        onPress={() => alert('Verification Complete')}
      >
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resendContainer}>
        <Text style={styles.resendText}>
          Didn't receive the code?{' '}
          <Text style={styles.resendLink} onPress={() => alert('Resend OTP')}>
            Resend
          </Text>
        </Text>
        <Text style={styles.timerText}>Request the new code in 30 seconds</Text>
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
    marginBottom: 10,
    color: '#4A4A4A',
  },
  subtitle: {
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 30,
    color: '#7A7A7A',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 30,
  },
  otpInput: {
    width: 40,
    height: 40,
    borderColor: '#C4C4C4',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
  },
  verifyButton: {
    backgroundColor: '#6C63FF',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resendContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resendText: {
    color: '#7A7A7A',
    fontSize: 14,
  },
  resendLink: {
    color: '#6C63FF',
    fontWeight: 'bold',
  },
  timerText: {
    color: '#7A7A7A',
    marginTop: 5,
    fontSize: 12,
  },
});
