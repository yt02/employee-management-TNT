import React from 'react';
import { ScrollView, ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Card, Title, List } from 'react-native-paper';
import { useAuth } from '../contexts/AuthContext';

// Screens
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import LeaveScreen from '../screens/LeaveScreen';
import RoomsScreen from '../screens/RoomsScreen';
import AttendanceScreen from '../screens/AttendanceScreen';
import CalendarScreen from '../screens/CalendarScreen';
import TicketsScreen from '../screens/TicketsScreen';
import VisitorScreen from '../screens/VisitorScreen';
import ShuttleScreen from '../screens/ShuttleScreen';
import TrainingScreen from '../screens/TrainingScreen';
import WellnessScreen from '../screens/WellnessScreen';

const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#667eea',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: { height: 60, paddingBottom: 8, paddingTop: 8 },
        tabBarLabelStyle: { fontSize: 11 },
        headerShown: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
          headerStyle: { backgroundColor: '#667eea' },
          headerTintColor: '#fff',
          headerTitle: 'Employee Management',
        }}
      />
      <Tab.Screen
        name="Leave"
        component={LeaveScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar-remove" size={size} color={color} />
          ),
          headerStyle: { backgroundColor: '#667eea' },
          headerTintColor: '#fff',
        }}
      />
      <Tab.Screen
        name="Rooms"
        component={RoomsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="door" size={size} color={color} />
          ),
          headerStyle: { backgroundColor: '#667eea' },
          headerTintColor: '#fff',
          headerTitle: 'Meeting Rooms',
        }}
      />
      <Tab.Screen
        name="Attendance"
        component={AttendanceScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clock-outline" size={size} color={color} />
          ),
          headerStyle: { backgroundColor: '#667eea' },
          headerTintColor: '#fff',
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="dots-horizontal" size={size} color={color} />
          ),
          headerStyle: { backgroundColor: '#667eea' },
          headerTintColor: '#fff',
        }}
      />
    </Tab.Navigator>
  );
}

// More screen with additional modules
function MoreScreen({ navigation }) {
  const modules = [
    { name: 'Calendar', icon: 'calendar', screen: 'Calendar', component: CalendarScreen },
    { name: 'Tickets', icon: 'ticket', screen: 'Tickets', component: TicketsScreen },
    { name: 'Visitor', icon: 'account-group', screen: 'Visitor', component: VisitorScreen },
    { name: 'Shuttle', icon: 'bus', screen: 'Shuttle', component: ShuttleScreen },
    { name: 'Training', icon: 'school', screen: 'Training', component: TrainingScreen },
    { name: 'Wellness', icon: 'heart-pulse', screen: 'Wellness', component: WellnessScreen },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <Card style={{ margin: 16 }}>
        <Card.Content>
          <Title>More Modules</Title>
          {modules.map((module, index) => (
            <List.Item
              key={index}
              title={module.name}
              left={props => <List.Icon {...props} icon={module.icon} />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => navigation.navigate(module.screen)}
              style={{ backgroundColor: '#f9f9f9', marginTop: 8, borderRadius: 8 }}
            />
          ))}
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

export default function AppNavigator() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#667eea' }}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <MainTabs /> : <LoginScreen />}
    </NavigationContainer>
  );
}

