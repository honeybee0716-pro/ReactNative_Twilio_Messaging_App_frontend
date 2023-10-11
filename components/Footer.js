import React from "react";
import SettingsScreen from "../screens/SettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomersScreen from "../screens/CustomersScreen";
import HomeScreen from "../screens/HomeScreen";
import { AntDesign,Feather} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Footer() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
        <AntDesign  name="home" color={color} size={size} />
      ),
    }}/>
      <Tab.Screen name="Customers" component={CustomersScreen} 
      options={{
        tabBarLabel: 'Customers',
        tabBarIcon: ({ color, size }) => (
          <Feather  name="users" color={color} size={size} />
        ),
      }}/>
      <Tab.Screen name="Settings" component={SettingsScreen} 
      options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({ color, size }) => (
          <AntDesign  name="setting" color={color} size={size} />
        ),
      }}/>
    </Tab.Navigator>
  );
}
