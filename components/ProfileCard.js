// components/ProfileCard.js
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert, Platform } from 'react-native';

export default function ProfileCard({ name, role, imageSource }) {
  const handlePress = () => {
    Alert.alert('Profile', `You tapped on ${name}'s profile.`);
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.85}>
      <View style={styles.card}>
        <Image source={imageSource} style={styles.avatar} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginVertical: 10,
    // Gölge (iOS) + elev. (Android)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: Platform.OS === 'ios' ? 0.1 : 0, // iOS
    shadowRadius: 4,
    elevation: 3 // Android
  },
  avatar: {
    width: 100, height: 100,
    borderRadius: 50,
    marginBottom: 12
  },
  name: { fontSize: 18, fontWeight: '700' },
  role: { fontSize: 14, color: '#6b7280', marginTop: 4 }
});
