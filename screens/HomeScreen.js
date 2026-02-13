import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Paragraph, Button, Avatar } from 'react-native-paper';
import { useAuth } from '../contexts/AuthContext';

export default function HomeScreen({ navigation }) {
  const { user, logout } = useAuth();

  const quickActions = [
    { title: 'Apply Leave', icon: 'calendar-remove', screen: 'Leave', color: '#667eea' },
    { title: 'Book Room', icon: 'door', screen: 'Rooms', color: '#764ba2' },
    { title: 'Clock In/Out', icon: 'clock-outline', screen: 'Attendance', color: '#f093fb' },
    { title: 'Create Ticket', icon: 'ticket', screen: 'Tickets', color: '#4facfe' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.welcomeCard}>
        <Card.Content>
          <View style={styles.header}>
            <Avatar.Text size={60} label={user?.name?.substring(0, 2).toUpperCase() || 'EM'} />
            <View style={styles.headerText}>
              <Title>Welcome, {user?.name || 'Employee'}!</Title>
              <Paragraph>{user?.role?.replace('_', ' ').toUpperCase() || 'Employee'}</Paragraph>
              <Paragraph style={styles.userId}>ID: {user?.user_id || 'N/A'}</Paragraph>
            </View>
          </View>
        </Card.Content>
      </Card>

      <Title style={styles.sectionTitle}>Quick Actions</Title>
      <View style={styles.actionsGrid}>
        {quickActions.map((action, index) => (
          <Card
            key={index}
            style={[styles.actionCard, { borderLeftColor: action.color }]}
            onPress={() => navigation.navigate(action.screen)}
          >
            <Card.Content style={styles.actionContent}>
              <Avatar.Icon size={48} icon={action.icon} style={{ backgroundColor: action.color }} />
              <Paragraph style={styles.actionTitle}>{action.title}</Paragraph>
            </Card.Content>
          </Card>
        ))}
      </View>

      <Card style={styles.infoCard}>
        <Card.Content>
          <Title>📱 Mobile App Features</Title>
          <Paragraph style={styles.infoText}>
            • Leave Management{'\n'}
            • Meeting Room Booking{'\n'}
            • Calendar & Events{'\n'}
            • Support Ticketing{'\n'}
            • Attendance Tracking{'\n'}
            • Visitor Registration{'\n'}
            • Shuttle Booking{'\n'}
            • Training Courses{'\n'}
            • Wellness Programs
          </Paragraph>
        </Card.Content>
      </Card>

      <Button
        mode="outlined"
        onPress={logout}
        style={styles.logoutButton}
        icon="logout"
      >
        Logout
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  welcomeCard: {
    margin: 16,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    marginLeft: 16,
    flex: 1,
  },
  userId: {
    fontSize: 12,
    color: '#666',
  },
  sectionTitle: {
    marginLeft: 16,
    marginTop: 8,
    marginBottom: 8,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
  actionCard: {
    width: '47%',
    margin: '1.5%',
    elevation: 2,
    borderLeftWidth: 4,
  },
  actionContent: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  actionTitle: {
    marginTop: 8,
    textAlign: 'center',
    fontWeight: '600',
  },
  infoCard: {
    margin: 16,
    elevation: 2,
  },
  infoText: {
    marginTop: 8,
    lineHeight: 24,
  },
  logoutButton: {
    margin: 16,
    marginTop: 8,
    marginBottom: 32,
  },
});

