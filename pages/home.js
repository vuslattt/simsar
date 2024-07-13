import React from 'react';
import { StyleSheet, ScrollView} from 'react-native';
import Score from '../src/components/score/score'
import Targetcard from '../src/components/targetcard/targetcard';
import FindDoctor from '../src/components/finddoctor/finddoctor';
import Doctorsection from '../src/components/doctorsection/doctorsection';
import Cosmetic from '../src/components/cosmetic/cosmetic';

const Home = () => {

  return (

      <ScrollView contentContainerStyle={styles.container}>
        <Score/>
        <Targetcard/>
        <FindDoctor/>
        <Doctorsection/>
        <Cosmetic/>
      </ScrollView>

  );
};

const styles = StyleSheet.create({
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

export default Home;
