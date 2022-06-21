import React, { useContext } from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
import Home from "../screens/Home";
import BookMark from "../screens/BookMark";
import { Ionicons } from "@expo/vector-icons";
import Search from "../screens/Search";
import {
  Layout,
  Button,
  TopNav,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
export default function MyTabs() {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Tab.Navigator
    shifting="true"
    barStyle={{
      backgroundColor: isDarkmode?themeColor.dark:themeColor.primary,
      borderRadius:10,
      position:"absolute"
    }}
    >
      <Tab.Screen options={
        {
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-home" color={color} size={24} />
            )
        }
      } name="Home" component={Home} />
      <Tab.Screen options={
        {
            tabBarLabel: "Search",
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="search" color={color} size={24} />
            )
        }
      } name="Search" component={Search} />
     
    </Tab.Navigator>
  );
}