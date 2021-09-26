import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./src/pages/Home/Home";
import Categories from "./src/pages/Categories/Categories";

import Header from './src/components/Header';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Header/>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <Icon name="home" />;
            },
          }}
        />
        <Tab.Screen
          name="Categories"
          component={Categories}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <Icon name="align-justify" />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
