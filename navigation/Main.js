import * as React from "react";
import { NavigationContainer, StackRouter } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import OccasionsScreen from "./screens/OccasionsScreen";
import LoginScreen from "./screens/LoginScreen";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={"home"}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === "Occasions") {
              iconName = focused ? "list" : "list-outline";
            } else if (rn === "Settings") {
              iconName = focused ? "settings" : "settings-outline";
            }
            return (
              <Ionicons
                name={iconName}
                size={size}
                color={color}
                style={{ paddingTop: 12, marginBottom: 4 }}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "grey",
          style: { paddingBottom: 8, fontSize: 10 },
        }}
      >
        <Tab.Screen name={"Home"} component={HomeScreen} />
        <Tab.Screen name={"Occasions"} component={OccasionsScreen} />
        <Tab.Screen name={"Settings"} component={SettingsScreen} />
        <Tab.Screen
          name={"Login"}
          component={LoginScreen}
          options={{
            tabBarButton: (props) => null,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
