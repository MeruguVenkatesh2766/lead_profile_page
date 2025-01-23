import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Native stack import
import { Ionicons } from '@expo/vector-icons';

import { LeadProfile } from './src/LeadProfile';
import { TasksScreen } from './src/TasksScreen'; // Tasks Screen
import { HomeScreen } from './src/HomeScreen'; // Contacts Placeholder
import { NewTask } from './src/NewTask'; // Import NewTask component

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator(); // Use native stack


function TasksStack() {
  return (
    <Stack.Navigator initialRouteName="TasksScreen">
      <Stack.Screen name="TasksScreen" component={TasksScreen} />
      <Stack.Screen name="NewTask" component={NewTask} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Contacts') {
              iconName = focused ? 'people' : 'people-outline';
            } else if (route.name === 'Tasks') {
              iconName = focused ? 'list' : 'list-outline';
            }

            // Return the appropriate icon
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#5B9BD5',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Tab.Screen options={{ headerShown: false }} name="Contacts" component={LeadProfile} />
        <Tab.Screen options={{ headerShown: false }} name="Tasks" component={TasksStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}