import { StatusBar } from 'expo-status-bar';
import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';

export default function Loading() {
  const scaleValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    startPulsating();
  }, []);

  const startPulsating = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.2,
          duration: 1000, // Время увеличения до 1.2 (2 секунды)
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 1000, // Время возврата к начальному размеру (2 секунды)
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.topHalf} />
      <View style={styles.bottomHalf} />
      <Animated.Image
        source={require('../assets/dosteka.png')} // Укажите путь к вашему изображению
        style={[styles.centeredImage, { transform: [{ scale: scaleValue }] }]}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topHalf: {
    flex: 3,
    backgroundColor: '#002700',
  },
  bottomHalf: {
    flex: 1,
    backgroundColor: '#E8E7BE',
  },
  centeredImage: {
    position: 'absolute',
    alignSelf: 'center',
    top: '40%',
    width: 300,
    height: 300,
    resizeMode: 'contain',
    transform: [{ translateY: -50 }],
  },
});
