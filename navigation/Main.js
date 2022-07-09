import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

// Screens
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { OccasionsScreen, NewOccasionForm } from "./screens/OccasionsScreen";
import LoginScreen from "./screens/LoginScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Stacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="NewOccasionForm" component={NewOccasionForm} />
    </Stack.Navigator>
  );
}

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={"home"}
        screenOptions={({ route }) => ({
          headerShown: false,
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
        <Tab.Screen
          name={"Home"}
          component={Stacks}
          options={({ route }) => ({
            tabBarStyle: {
              display: getTabBarVisibility(route),
              backgroundColor: "white",
            },
          })}
        />
        <Tab.Screen name={"Occasions"} component={OccasionsScreen} />
        <Tab.Screen name={"Settings"} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function getTabBarVisibility(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";

  if (routeName === "Login") {
    return "none";
  }
  return "flex";
}
export default MainContainer;
