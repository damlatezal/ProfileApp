// App.js
import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileCard from './components/ProfileCard';

export default function App() {
  const profiles = [
    { name: 'Damla Tezal', role: 'Computer Engineer', image: require('./assests/resim.jpeg') },
    { name: 'Şevval ', role: 'Game Developer', image: require('./assests/resim2.jpeg') },
    { name: 'Eren', role: ' Biologist', image: require('./assests/resim3.jpeg') },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>My Profile App</Text>

        <View style={styles.list}>
          {profiles.map(p => (
            <ProfileCard
              key={p.name}
              name={p.name}
              role={p.role}
              imageSource={p.image}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f2f5' },
  content: { padding: 20 },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 12 },
  list: { gap: 12 },
});