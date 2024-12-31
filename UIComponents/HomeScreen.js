import React from 'react';
import { View, Text, TextInput, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const candidates = [
  { id: '1', name: 'Mauro Pires', party: 'Frelimo', image: require('../assets/candidate1.png') },
  { id: '2', name: 'Mauro Pires', party: 'Renamo', image: require('../assets/candidate2.png') },
  { id: '3', name: 'Mauro Pires', party: 'MDM', image: require('../assets/candidate3.png') },
];

export default function HomeScreen({ navigation }) {
  const renderCandidate = ({ item }) => (
    <View style={styles.candidateCard}>
      <Image source={item.image} style={styles.candidateImage} />
      <View style={styles.candidateInfo}>
        <Text style={styles.candidateName}>{item.name}</Text>
        <Text style={styles.candidateParty}>{item.party}</Text>
      </View>
      <TouchableOpacity
        style={styles.viewProfileButton}
        onPress={() => navigation.navigate('CandidateProfile')}
      >
        <Text style={styles.buttonText}>View Profile</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/user.png')} style={styles.userImage} />
        <View>
          <Text style={styles.userName}>Luis Milice</Text>
          <Text style={styles.userRole}>Voter</Text>
        </View>
      </View>
      <View style={styles.timerCard}>
        <Text style={styles.timerText}>Remaining time for the election</Text>
        <View style={styles.timer}>
          <Text style={styles.time}>124</Text>
          <Text>Days</Text>
          <Text style={styles.time}>4</Text>
          <Text>Hours</Text>
          <Text style={styles.time}>30</Text>
          <Text>Minutes</Text>
          <Text style={styles.time}>29</Text>
          <Text>Seconds</Text>
        </View>
      </View>
      <TextInput style={styles.searchBar} placeholder="Search candidates..." />
      <FlatList
        data={candidates}
        keyExtractor={(item) => item.id}
        renderItem={renderCandidate}
        style={styles.candidateList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  userImage: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  userName: { fontSize: 18, fontWeight: 'bold' },
  userRole: { color: 'gray' },
  timerCard: {
    backgroundColor: '#6C63FF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  timerText: { color: '#fff', marginBottom: 10, fontWeight: 'bold' },
  timer: { flexDirection: 'row', justifyContent: 'space-around', color: '#fff' },
  time: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  searchBar: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
  },
  candidateList: { marginTop: 10 },
  candidateCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    elevation: 2,
  },
  candidateImage: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  candidateInfo: { flex: 1 },
  candidateName: { fontSize: 16, fontWeight: 'bold' },
  candidateParty: { color: 'gray' },
  viewProfileButton: {
    backgroundColor: '#6C63FF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
});
