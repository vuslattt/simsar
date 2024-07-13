import React from 'react';
import { StyleSheet, ScrollView} from 'react-native';
import Home from '../pages/home'

const index = () => {

  return (

      <ScrollView contentContainerStyle={styles.container}>
 <Home/>
      </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
  },
});

export default index;
