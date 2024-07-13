import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function Cosmetic() {
  const [proceduresScrollPosition, setProceduresScrollPosition] = useState(0);

  const handleProceduresScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const contentWidth = event.nativeEvent.contentSize.width;
    const containerWidth = event.nativeEvent.layoutMeasurement.width;
    const scrollIndicatorWidth = (containerWidth / contentWidth) * width;
    const leftPosition = (offsetX / contentWidth) * containerWidth;

    setProceduresScrollPosition(leftPosition);
    setScrollIndicatorWidth(scrollIndicatorWidth);
  };

  const [scrollIndicatorWidth, setScrollIndicatorWidth] = useState((width / width) * 100); // Initial width is set to 100%

  return (
    <View style={styles.popularProceduresCard}>
      <Text style={styles.proceduresHeader}>Popüler Kozmetik Prosedürleri Araştırın</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.proceduresRow}
        onScroll={handleProceduresScroll}
        scrollEventThrottle={16}
      >
        {/* Your procedure items go here */}
        {/* Example items */}
        <View style={styles.procedureItem}>
          <Image source={{ uri: 'https://zupsie.vercel.app/static/media/1.588a95892f3dbe8e3ae8.png' }} style={styles.procedureImage} />
          <Text style={styles.procedureName}>Botox</Text>
          <Text style={styles.procedureRating}>%92 Buna değer</Text>
        </View>
        <View style={styles.procedureItem}>
          <Image source={{ uri: 'https://zupsie.vercel.app/static/media/2.c67e507ee3e79586f0ce.png' }} style={styles.procedureImage} />
          <Text style={styles.procedureName}>Juvederm</Text>
          <Text style={styles.procedureRating}>%92 Buna değer</Text>
        </View>
        <View style={styles.procedureItem}>
          <Image source={{ uri: 'https://zupsie.vercel.app/static/media/3.df0c67f27468ceb69eb1.png' }} style={styles.procedureImage} />
          <Text style={styles.procedureName}>Facelift</Text>
          <Text style={styles.procedureRating}>%92 Buna değer</Text>
        </View>
        <View style={styles.procedureItem}>
          <Image source={{ uri: 'https://zupsie.vercel.app/static/media/4.49087ccf9c3851e304de.png' }} style={styles.procedureImage} />
          <Text style={styles.procedureName}>Rhinoplasty</Text>
          <Text style={styles.procedureRating}>%92 Buna değer</Text>
        </View>
        <View style={styles.procedureItem}>
          <Image source={{ uri: 'https://zupsie.vercel.app/static/media/5.58a0f2317b35791fff4a.png' }} style={styles.procedureImage} />
          <Text style={styles.procedureName}>Laser Hair Removal</Text>
          <Text style={styles.procedureRating}>%92 Buna değer</Text>
        </View>
        <View style={styles.procedureItem}>
          <Image source={{ uri: 'https://zupsie.vercel.app/static/media/6.033e17fbeafe5053b135.png' }} style={styles.procedureImage} />
          <Text style={styles.procedureName}>Liposuction</Text>
          <Text style={styles.procedureRating}>%92 Buna değer</Text>
        </View>
        <View style={styles.procedureItem}>
          <Image source={{ uri: 'https://zupsie.vercel.app/static/media/7.d188637542aea6099eed.png' }} style={styles.procedureImage} />
          <Text style={styles.procedureName}>Brazilian Bult Lift</Text>
          <Text style={styles.procedureRating}>%92 Buna değer</Text>
        </View>
        <View style={styles.procedureItem}>
          <Image source={{ uri: 'https://zupsie.vercel.app/static/media/8.ccf95f897ae875bd9ad2.png' }} style={styles.procedureImage} />
          <Text style={styles.procedureName}>Liposuction</Text>
          <Text style={styles.procedureRating}>%92 Buna değer</Text>
        </View>
        <View style={styles.procedureItem}>
          <Image source={{ uri: 'https://zupsie.vercel.app/static/media/9.a4866ef922962483c27e.png' }} style={styles.procedureImage} />
          <Text style={styles.procedureName}>Invisalign</Text>
          <Text style={styles.procedureRating}>%92 Buna değer</Text>
        </View>
        <View style={styles.procedureItem}>
          <Image source={{ uri: 'https://zupsie.vercel.app/static/media/10.8c0116fc52a3d97ab561.png' }} style={styles.procedureImage} />
          <Text style={styles.procedureName}>Smart Lipo</Text>
          <Text style={styles.procedureRating}>%92 Buna değer</Text>
        </View>
        <View style={styles.procedureItem}>
          <Image source={{ uri: 'https://zupsie.vercel.app/static/media/11.b991cc64bce7736234a7.png' }} style={styles.procedureImage} />
          <Text style={styles.procedureName}>Eyelid Surgery</Text>
          <Text style={styles.procedureRating}>%92 Buna değer</Text>
        </View>
        <View style={styles.procedureItem}>
          <Image source={{ uri: 'https://zupsie.vercel.app/static/media/12.a394f7a753c114dac6e5.png' }} style={styles.procedureImage} />
          <Text style={styles.procedureName}>Tumy Tuck</Text>
          <Text style={styles.procedureRating}>%92 Buna değer</Text>
        </View>
      </ScrollView>
      <View style={styles.scrollIndicatorContainer}>
        <View style={[styles.scrollIndicator, { left: proceduresScrollPosition, width: scrollIndicatorWidth }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  popularProceduresCard: {
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
  proceduresHeader: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 50,
    textAlign: 'center',
  },
  proceduresRow: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  procedureItem: {
    alignItems: 'center',
    width: 160,
    height: 215,
    marginLeft: 8,
    marginRight: 8,
  },
  procedureImage: {
    width: 120,
    height: 110,
    marginBottom: 20,
  },
  procedureName: {
    fontSize: 14,
    color: '#000',
    marginBottom: 20,
  },
  procedureRating: {
    fontSize: 12,
    color: '#D9534F',
    marginBottom: 30,
  },
  scrollIndicatorContainer: {
    width: '100%',
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
    marginTop: 10,
    overflow: 'hidden',
  },
  scrollIndicator: {
    height: 4,
    backgroundColor: '#6528f7',
    borderRadius: 2,
    position: 'absolute',
  },
});
