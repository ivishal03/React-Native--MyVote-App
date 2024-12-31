import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function SlidingScreen2({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.replace('Login')} style={styles.skipButton}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
      <Image source={require('../assets/slide2.png')} style={styles.image} />
      <Text style={styles.title}>Stay tuned</Text>
      <Text style={styles.subtitle}>
        Follow each candidate's election campaign and updates.
      </Text>
      <View style={styles.pagination}>
        <View style={styles.inactiveDot} />
        <View style={styles.activeDot} />
        <View style={styles.inactiveDot} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Sliding3')} style={styles.nextButton}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  skipButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  skipText: {
    color: '#6C63FF',
    fontSize: 16,
  },
  image: {
    width: 350,
    height: 350,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  subtitle: {
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 10,
    color: '#7A7A7A',
  },
  pagination: {
    flexDirection: 'row',
    marginTop: 30,
  },
  activeDot: {
    width: 10,
    height: 10,
    backgroundColor: '#6C63FF',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  inactiveDot: {
    width: 10,
    height: 10,
    backgroundColor: '#C4C4C4',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  nextButton: {
    marginTop: 40,
    backgroundColor: '#6C63FF',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  nextText: {
    color: '#fff',
    fontSize: 16,
  },
});
