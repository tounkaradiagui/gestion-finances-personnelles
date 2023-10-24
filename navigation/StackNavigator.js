import React from 'react'
import {StyleSheet, Text, View} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import TransactionScreen from '../screens/TransactionScreen';
import WalletScreen from '../screens/WalletScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { FontAwesome } from '@expo/vector-icons';
import SavingScreen from '../screens/SavingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ForgotPasswordScreen from '../components/auth/ForgotPasswordScreen';
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from '../components/auth/LoginScreen';
import RegisterScreen from '../components/auth/RegisterScreen';
import HomeScreen from "../screens/HomeScreen";


const StackNavigator = () => {

    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    function BottomTabs() {
        return(
          <Tab.Navigator>
            <Tab.Screen
              name="Dashboard"
              component={HomeScreen}
              options={{
                tabBarLabelStyle:{color:"#078ECB"},
                headerShown:false,
                tabBarIcon: ({focused}) => focused ? (
                  <Entypo name="home" size={24} color="#078ECB" />
                ) : (
                  <AntDesign name="home" size={24} color="black" />
                ),
              }}
            />
            <Tab.Screen
              name="Transactions"
              component={TransactionScreen}
              options={{
                tabBarLabelStyle:{color:"#078ECB"},
                headerShown:false,
                tabBarIcon: ({focused}) => focused ? (
                  <FontAwesome name="exchange" size={24} color="#078ECB" />
                ) : (
                  <FontAwesome name="exchange" size={24} color="black" />
                ),
              }}
            />
            <Tab.Screen
              name="Epargne"
              component={SavingScreen}
              options={{
                tabBarLabelStyle:{color:"#078ECB"},
                headerShown:false,
                tabBarIcon: ({focused}) => focused ? (
                  <AntDesign name="pluscircleo" size={24} color="#078ECB" />
                ) : (
                  <AntDesign name="pluscircleo" size={24} color="black" />
                ),
              }}
            />
            <Tab.Screen
              name="Portefeuille"
              component={WalletScreen}
              options={{
                tabBarLabelStyle:{color:"#078ECB"},
                headerShown:false,
                tabBarIcon: ({focused}) => focused ? (
                  <Ionicons name="wallet" size={24} color="#078ECB" />
                ) : (
                  <Ionicons name="wallet-outline" size={24} color="black" />
                ),
              }}
            />
            <Tab.Screen
              name="Profil"
              component={ProfileScreen}
              options={{
                tabBarLabelStyle:{color:"#078ECB"},
                headerShown:false,
                tabBarIcon: ({focused}) => focused ? (
                  <Ionicons name="person" size={24} color="#078ECB" />
                ) : (
                  <Ionicons name="person-outline" size={24} color="black" />
                ),
              }}
            />
          </Tab.Navigator>
        )
    }

  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Welcome">
        <Stack.Screen name="Welcome" options={{headerShown:false}} component={WelcomeScreen} />
        <Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen} />
        <Stack.Screen name="Inscription" options={{headerShown:false}} component={RegisterScreen} />
        <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen} />
        <Stack.Screen name="Dashboard" options={{headerShown:false}} component={BottomTabs} />
        <Stack.Screen name="Transactions" options={{headerShown:false}} component={TransactionScreen} />
        <Stack.Screen name="Epargne" options={{headerShown:false}} component={SavingScreen} />
        <Stack.Screen name="ForgotPassword" options={{headerShown:false}} component={ForgotPasswordScreen} />
        <Stack.Screen name="Mon Profil" options={{headerShown:false}} component={ForgotPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})