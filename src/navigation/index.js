import React from "react";
import { } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as screens from "../screens";


//const Stack1 = createNativeStackNavigator(); //yeni bir stack component oluşturuyor
const Tab = createBottomTabNavigator();

const Navigation = (props) => {
  const {} = props;

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{tabBarShowLabel:false, headerShown:false}}>
        <Tab.Screen name="Screen1" component={screens.Screen1} options={{ tabBarIcon: ({focused, color, size }) => {
          if(focused)
          return <MaterialCommunityIcons name="home" color={'#424642'} size={size}/>
          return <MaterialCommunityIcons name="home-outline" color={color} size={size}/>
        }}} />
        <Tab.Screen name="Screen2" component={screens.Screen2} options={{  tabBarIcon: ({focused, color, size }) => {
          if(focused)
          return <MaterialCommunityIcons name="magnify-expand" color={'#424642'} size={size} />
          return <MaterialCommunityIcons name="magnify" color={color} size={size} />
        }}}/>
       
        <Tab.Screen name="Screen4" component={screens.Screen4} options={{  tabBarIcon: ({ focused, color, size }) => {
          if(focused)
          return <MaterialCommunityIcons name="cart" color={'#424642'} size={size} />
          return <MaterialCommunityIcons name="cart-outline" color={color} size={size} />
        }
        }}/>
        <Tab.Screen name="Screen5" component={screens.Screen5} options={{  tabBarIcon: ({focused, color, size }) => {
          if(focused)
          return <MaterialCommunityIcons name="account" color={'#424642'} size={size} />
          return <MaterialCommunityIcons name="account-outline" color={color} size={size} />
        }
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export { Navigation };

/*
eğer focussa diğer tabiconu göster özelliği eklendi 
tab navigation eklendi
*/
