import React from 'react';
import { Text, StyleSheet, ScrollView, StatusBar, SafeAreaView } from 'react-native';
import Score from '../src/components/score/score';
import Targetcard from '../src/components/targetcard/targetcard';
import FindDoctor from '../src/components/finddoctor/finddoctor';
import Doctorsection from '../src/components/doctorsection/doctorsection';
import Cosmetic from '../src/components/cosmetic/cosmetic';

const CreditScoreCard = () => {

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Zuplink</Text>
        <Text style={styles.subHeader}>By power Zupsie</Text>
        <Score/>
        <Targetcard/>
        <FindDoctor/>
        <Doctorsection/>
        <Cosmetic/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6E32C9',
    marginBottom: 5,
  },
  subHeader: {
    fontSize: 12,
    color: '#6E32C9',
    marginBottom: 20,
  },
});

export default CreditScoreCard;
