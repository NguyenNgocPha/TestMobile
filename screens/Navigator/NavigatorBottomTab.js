import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { View, Text } from "react-native";

const Tab = createBottomTabNavigator();
import Search from "../Component/Search/Search";
import { Entypo } from '@expo/vector-icons';
import Appointments from "../Component/Appointments/Appointments";
import Profile from "../Component/Profile/Profile.jsx";
import Notification from "../Component/Notification/Notification";





export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Search"
      screenOptions={({ navigation, route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'home-outline' : 'home-outline';
          } else if (route.name === 'Centres') {
            iconName = focused ? 'storefront-outline' : 'storefront-outline';
          } else if (route.name === 'More') {
            iconName = focused ? 'dots-horizontal' : 'dots-horizontal';
          }
          return (
            <MaterialCommunityIcons name={iconName} size={30} color={color} />
          );
        },
        tabBarActiveTintColor: '#ff6600   ',
        tabBarInactiveTintColor: 'gray',
        headerTitleAlign: 'center',
        tabBarLabelStyle: {
          fontSize: 15,
        },
      })}>

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <AntDesign name="search1" size={26}  color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Appointments"
        component={Appointments}
        options={{
          tabBarLabel: "Appointments",
          tabBarIcon: ({ color }) => (
            <AntDesign name="clockcircle" size={24}  color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <AntDesign name="profile" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Entypo name="bell" size={26}  color={color} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}
