import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Finddoctor() {
    const [activeButton, setActiveButton] = useState('online');
    
  return (
    <View style={styles.findDoctorContainer}>
    <Text style={styles.findDoctorText}>Doktor bul, randevu al, online <Text style={styles.highlight}>görüşme yap!</Text></Text>
    <View style={styles.toggleButtonContainer}>
      <TouchableOpacity
        style={[
          styles.toggleButton,
          activeButton === 'online' && styles.activeButton,
          { borderTopLeftRadius: 5, borderBottomLeftRadius: 5 },
        ]}
        onPress={() => setActiveButton('online')}
      >
        <Text style={[styles.buttonText, activeButton === 'online' && styles.activeButtonText]}>Online Görüşme</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.toggleButton,
          activeButton === 'faceToFace' && styles.activeButton,
          { borderTopRightRadius: 5, borderBottomRightRadius: 5 },
        ]}
        onPress={() => setActiveButton('faceToFace')}
      >
        <Text style={[styles.buttonText, activeButton === 'faceToFace' && styles.activeButtonText]}>Yüz Yüze Randevu</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.searchContainer}>
      <TextInput style={styles.searchInput} placeholder="Doktor veya Branş Arayın..." placeholderTextColor="#6528f76b" />
      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.searchButtonText}>Ara <Icon name="search" size={16} color="#FFF" /></Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({

  findDoctorContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  findDoctorText: {
    fontSize: 29,
    color: '#000',
    marginBottom: 50,
    textAlign: 'center',
  },
  highlight: {
    color: '#6528f7',
  },
  toggleButtonContainer: {
    flexDirection: 'row',
    marginBottom: 50,
    width: '80%',
    borderRadius: 30,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#6528f7',
  },
  toggleButton: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  activeButton: {
    backgroundColor: '#6528f7',
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 16,
    color: '#6528f7',
    textAlign: 'center',
  },
  activeButtonText: {
    color: '#FFF',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#dee2e6',
    borderRadius: 7,
    padding: 1,
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    color: '#000',
    fontSize: 18,
    paddingLeft: 10,
  },
  searchButton: {
    backgroundColor: '#6528f7',
    padding: 10,
    borderRadius: 5,
    height: '100%',
    justifyContent: 'center',
  },
  searchButtonText: {
    color: '#FFF',
    fontSize: 19,
  },
})