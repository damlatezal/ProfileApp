import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function ProfileCard({ name, role, imageSource }) {
  const handlePress = () => {
    Alert.alert("'Profile', You tapped on ${name}'s profile.");
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
      <View style={styles.card}>
        <Image source={imageSource} style={styles.avatar} resizeMode="cover" />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>
      </View>
    </TouchableOpacity>
  );
}

const AVATAR_SIZE = 100;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    marginBottom: 12,
  },
  name: { fontSize: 18, fontWeight: '700' },
  role: { fontSize: 14, color: '#666', marginTop: 4 },
});