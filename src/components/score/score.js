import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Path, Circle } from 'react-native-svg';

export default function Score() {
  return (
    <View style={styles.card}>
    <View style={styles.svgContainer}>
      <Svg height="150" width="150" viewBox="0 0 100 100">
        <Path
          d="M 10 50 A 40 40 0 0 1 25 20"
          stroke="#F44336"
          strokeWidth="10"
          fill="none"
        />
        <Path
          d="M 25 20 A 40 40 0 0 1 50 10"
          stroke="#FF9800"
          strokeWidth="10"
          fill="none"
        />
        <Path
          d="M 50 10 A 40 40 0 0 1 75 20"
          stroke="#FFEB3B"
          strokeWidth="10"
          fill="none"
        />
        <Path
          d="M 75 20 A 40 40 0 0 1 90 50"
          stroke="#8BC34A"
          strokeWidth="10"
          fill="none"
        />
        <Path
          d="M 90 50 A 40 40 0 0 1 75 80"
          stroke="#4CAF50"
          strokeWidth="10"
          fill="none"
        />
        <Circle cx="50" cy="50" r="35" fill="#fff" />
      </Svg>
      <Text style={styles.score}>2</Text>
    </View>
    <Text style={styles.risk}>RİSKLİ</Text>
    <Text style={styles.greeting}>Merhaba</Text>
    <Text style={styles.name}>BAHATTIN BERKDINC</Text>
    <Text style={styles.description}>Kredi Skorun</Text>
    <Text style={styles.riskLevel}>RİSKLİ seviyede görünüyor.</Text>
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
      svgContainer: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
      },
      score: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#000',
        position: 'absolute',
        top: 50,
      },
      risk: {
        fontSize: 24,
        color: '#D9534F',
        marginVertical: 10,
      },
      greeting: {
        fontSize: 18,
        color: '#000',
      },
      name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
      },
      description: {
        fontSize: 14,
        color: '#000',
      },
      riskLevel: {
        fontSize: 14,
        color: '#D9534F',
      },
})