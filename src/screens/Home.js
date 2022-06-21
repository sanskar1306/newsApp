import React, { useState, useEffect } from "react";
import { View, Linking, ScrollView, FlatList } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import {
  Layout,
  Button,
  TopNav,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Topic from "../components/Topic";


const Tab = createMaterialTopTabNavigator();
  

  function TopicTabs() {
    const { isDarkmode, setTheme } = useTheme();
    return (
      <Tab.Navigator 
    
      screenOptions={{
        tabBarLabelStyle: { fontSize: 10,fontWeight:"bold", color:isDarkmode?themeColor.white:themeColor.black },
        tabBarItemStyle: { width: 80 },
        tabBarScrollEnabled:true,
        tabBarStyle: { backgroundColor: isDarkmode?themeColor.dark:themeColor.white },
        lazy:true       
      }}
      >
       
        <Tab.Screen name="All"  >
          {(props) => <Topic  {...props} topic="general" />}
        </Tab.Screen>
        <Tab.Screen name="Tech"  >
          {(props) => <Topic  {...props} topic="technology" />}
        </Tab.Screen>
        <Tab.Screen name="Business"  >
          {(props) => <Topic  {...props} topic="business" />}
        </Tab.Screen>
        <Tab.Screen name="Entertainment"  >
          {(props) => <Topic  {...props} topic="entertainment" />}
        </Tab.Screen>
        <Tab.Screen name="Health"  >
          {(props) => <Topic  {...props} topic="health" />}
        </Tab.Screen>
        <Tab.Screen name="Science"  >
          {(props) => <Topic  {...props} topic="science" />}
        </Tab.Screen>
      
        <Tab.Screen name="Sports"  >
          {(props) => <Topic  {...props} topic="sports" />}
        </Tab.Screen>
       
     
        
       
  
      </Tab.Navigator>
    );
  }

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  const auth = getAuth();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  



  return (
    <Layout>
      <TopNav
        style={{
          elevation:0
        }}
        middleContent="Home"
        leftContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        leftAction={() => {
          if (isDarkmode) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}

        rightContent={
         
            <Ionicons
            
            name= "log-out"
            size={20}
            color="red"
          />

          
           
        }

        rightAction={() => {
          signOut(auth);
        }}

      />

      <TopicTabs />

    </Layout>
  );
}
