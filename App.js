import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

// Import Screens
import SplashScreen from './UIComponents/SplashScreen';
import SlidingScreen1 from './UIComponents/SlidingScreen1';
import SlidingScreen2 from './UIComponents/SlidingScreen2';
import SlidingScreen3 from './UIComponents/SlidingScreen3';
import LoginScreen from './UIComponents/LoginScreen';
import SignupScreen from './UIComponents/SignupScreen';
import OTPVerificationScreen from './UIComponents/OTPVerificationScreen';
import HomeScreen from './UIComponents/HomeScreen';
import ChartScreen from './UIComponents/ChartScreen';
import FavoritesScreen from './UIComponents/FavoritesScreen';
import ProfileScreen from './UIComponents/ProfileScreen';
import CandidateProfileScreen from './UIComponents/CandidateProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Charts') {
            iconName = focused ? 'bar-chart' : 'bar-chart-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6C63FF',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Charts" component={ChartScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// Main App Navigator
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Sliding1" component={SlidingScreen1} />
        <Stack.Screen name="Sliding2" component={SlidingScreen2} />
        <Stack.Screen name="Sliding3" component={SlidingScreen3} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="OTPVerification" component={OTPVerificationScreen} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="CandidateProfile" component={CandidateProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
