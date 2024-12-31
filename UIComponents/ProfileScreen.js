import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/user.png')} style={styles.userImage} />
      <Text style={styles.userName}>Luis Milice</Text>
      <Text style={styles.userRole}>Voter</Text>
      <TouchableOpacity style={styles.option}>
        <Text>Support</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', backgroundColor: '#fff' },
  userImage: { width: 80, height: 80, borderRadius: 40 },
  userName: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
  userRole: { color: 'gray' },
  option: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#F5F5F5', width: '100%' },
});
