import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions} from 'react-native';
import React, { useState } from 'react'

const { width } = Dimensions.get('window');


export default function Doctorsection() {
    const [scrollPosition, setScrollPosition] = useState(0);
  
    const handleScroll = (event) => {
      const offsetX = event.nativeEvent.contentOffset.x;
      const contentWidth = event.nativeEvent.contentSize.width;
      setScrollPosition((offsetX / contentWidth) * width);
    };

  return (
    <View style={styles.card}>
    <View style={styles.doctorSection}>
      <Text style={styles.sectionHeader}>Sana Uygun Doktorlar</Text>
      <Text style={styles.sectionSubHeader}>tercihini yap, hemen online olarak görüş veya soru sor.</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll} onScroll={handleScroll} scrollEventThrottle={16}>
        <View style={styles.doctorCard}>
          <Image source={{ uri: 'https://zupsie.vercel.app/static/media/tooth.56bbf1eb9ba8b91e3204.png' }} style={styles.doctorImage} />
          <Text style={styles.doctorTitle}>Diş Hekimi</Text>
          <TouchableOpacity style={styles.doctorButton}>
            <Text style={styles.doctorButtonText}>10 Doktor</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.doctorCard}>
          <Image source={{ uri: 'https://zupsie.vercel.app/static/media/surgeon.1c49d97255a239758392.png' }} style={styles.doctorImage} />
          <Text style={styles.doctorTitle}>Plastik Cerrah</Text>
          <TouchableOpacity style={styles.doctorButton}>
            <Text style={styles.doctorButtonText}>5 Doktor</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.doctorCard}>
          <Image source={{ uri: 'https://zupsie.vercel.app/static/media/diet.fc9a73a64af361f2bec5.png' }} style={styles.doctorImage} />
          <Text style={styles.doctorTitle}>Beslenme / Diet</Text>
          <TouchableOpacity style={styles.doctorButton}>
            <Text style={styles.doctorButtonText}>6 Doktor</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.doctorCard}>
          <Image source={{ uri: 'https://zupsie.vercel.app/static/media/makeup.ebb9553f476709d33a87.png' }} style={styles.doctorImage} />
          <Text style={styles.doctorTitle}>Güzellik Koçu</Text>
          <TouchableOpacity style={styles.doctorButton}>
            <Text style={styles.doctorButtonText}>6 Doktor</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.doctorCard}>
          <Image source={{ uri: 'https://zupsie.vercel.app/static/media/psychology.b5a0f9f3a5bb958a744c.png' }} style={styles.doctorImage} />
          <Text style={styles.doctorTitle}>Psikoloji</Text>
          <TouchableOpacity style={styles.doctorButton}>
            <Text style={styles.doctorButtonText}>6 Doktor</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.scrollIndicatorContainer}>
        <View style={[styles.scrollIndicator, { left: scrollPosition }]} />
      </View>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
      },

  doctorSection: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  sectionSubHeader: {
    fontSize: 16,
    color: '#6528f7',
    marginBottom: 50,
    textAlign: 'center',
  },
  horizontalScroll: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  doctorCards: {
    flexDirection: 'row',
  },
  doctorCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    width: 150,
    height: 215,
    marginLeft: 8,
    marginRight: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom:40,
  },
  doctorImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
    marginTop:10,
  },
  doctorTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6E32C9',
    marginBottom: 10,
    textAlign: 'center',
  },
  doctorButton: {
    backgroundColor: '#6528f7',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 25,
    position:'absolute',
    bottom:8,
  },
  doctorButtonText: {
    color: '#FFF',
    fontSize: 15,
  },
  scrollIndicatorContainer: {
    width: '100%',
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
    marginTop: 10,
  },
  scrollIndicator: {
    height: 4,
    backgroundColor: '#6528f7',
    borderRadius: 2,
    position: 'absolute',
    width: 100,
  },
})