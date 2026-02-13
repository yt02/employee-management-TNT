import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

export default function VisitorScreen() {
  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>👥 Visitor Management</Title>
          <Paragraph style={styles.subtitle}>Register and manage visitors</Paragraph>
          <Paragraph style={styles.comingSoon}>Coming soon...</Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  card: { margin: 16, elevation: 2 },
  subtitle: { color: '#666', marginTop: 8 },
  comingSoon: { marginTop: 24, textAlign: 'center', color: '#999', fontStyle: 'italic' },
});

