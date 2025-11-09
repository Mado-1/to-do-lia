// LoadingScreen.tsx
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // 👈 lägg till detta
import { Calendar } from 'lucide-react-native';

const LoadingScreen = () => {
  const navigation = useNavigation(); // 👈 skapa navigation hook

  const spinValue = useRef(new Animated.Value(0)).current;
  const pulseValue = useRef(new Animated.Value(0)).current;

useEffect(() => {
  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1000,
      duration: 60000,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  )

    Animated.loop(
    Animated.sequence([
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1800,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }),
  ])
).start();
}, [spinValue]);

useEffect(() => {
  Animated.loop(
    Animated.sequence([
      Animated.timing(pulseValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(pulseValue, {
        toValue: 0,
        duration: 2000,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
    ])
  ).start();
}, [pulseValue]);

useEffect(() => {
  const timer = setTimeout(() => {
    navigation.replace('Home');
  }, 3000);
  return () => clearTimeout(timer);
}, [navigation]);


  const spin = spinValue.interpolate({
    inputRange: [0, 1000],
    outputRange: ['0deg', '360000deg'],
  });

  const pulseOpacity = pulseValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.4, 1],
  });

  return (
    <View style={styles.container}>
      {/* Rotating Circle with Icon */}
      <Animated.View style={[styles.circle, { transform: [{ rotate: spin }] }]}>
        <Calendar color="#fff" size={48} />
      </Animated.View>

      {/* Text Section */}
      <Text style={styles.title}>Unstressable</Text>
      <Text style={styles.subtitle}>Making family life stress-free...</Text>

      {/* Loading Bar */}
      <View style={styles.loadingBarContainer}>
        <Animated.View style={styles.loadingBarFill} />
      </View>

      {/* Animated loading text */}
      <Animated.Text style={[styles.loadingText, { opacity: pulseOpacity }]}>
        Syncing schedules and activities
      </Animated.Text>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#6366f1',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  floatingIcons: {
    position: 'absolute',
  },
  iconTopRight: {
    position: 'absolute',
    top: '38%',
    right: '34%',
  },
  iconBottomLeft: {
    position: 'absolute',
    bottom: '38%',
    left: '34%',
  },
  iconRight: {
    position: 'absolute',
    right: '26%',
    top: '50%',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1e3a8a',
    marginTop: 24,
  },
  subtitle: {
    fontSize: 16,
    color: '#4b5563',
    marginBottom: 20,
  },
  loadingBarContainer: {
    width: 200,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#e5e7eb',
    overflow: 'hidden',
    marginVertical: 12,
  },
  loadingBarFill: {
    width: '100%',
    height: '100%',
    backgroundColor: '#6366f1',
  },
  loadingText: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 12,
  },
});
