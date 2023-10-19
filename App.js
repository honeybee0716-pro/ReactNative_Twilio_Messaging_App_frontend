import React from "react";
import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SiginupScreen";
import Footer from "./components/Footer";
import HomeSearchScreen from "./screens/HomeSearchScreen";
import CustomersSearchScreen from "./screens/CustomersSearchScreen";
import MyProfileScreen from "./screens/MyProfileScreen";
import CustomerProfileScreen from "./screens/CustomerProfileScreen";
import NewCustomerScreen from "./screens/NewCustomerScreen";
import CustomersScreen from "./screens/CustomersScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ContactScreen from "./screens/ContactScreen";
import ChatRoomScreen from "./screens/ChatRoomScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar barStyle="light-content" backgroundColor={'#203864'} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Signup"
            component={SignupScreen}
          />
          <Stack.Screen
            name="Footer"
            component={Footer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeSearchScreen"
            component={HomeSearchScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CustomersScreen"
            component={CustomersScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CustomersSearchScreen"
            component={CustomersSearchScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MyProfileScreen"
            component={MyProfileScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CustomerProfileScreen"
            component={CustomerProfileScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NewCustomerScreen"
            component={NewCustomerScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SettingsScreen"
            component={SettingsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ContactScreen"
            component={ContactScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChatRoomScreen"
            component={ChatRoomScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
