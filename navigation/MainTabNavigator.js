import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import TabBarIcon from "../components/TabBarIcon";
import Superman from "../screens/Superman";
import Progress from "../screens/Progress";
import SettingsScreen from "../screens/SettingsScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const SupermanStack = createStackNavigator({ Superman }, config);

SupermanStack.navigationOptions = {
  tabBarLabel: "Superman",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

SupermanStack.path = "";

const ProgressStack = createStackNavigator({ Progress }, config);

ProgressStack.navigationOptions = {
  tabBarLabel: "Progress",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-refresh-circle" : "md-refresh-circle"}
    />
  )
};

ProgressStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: "Surprise",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "logo-chrome" : "logo-chrome"}
    />
  )
};

SettingsStack.path = "";

const tabNavigator = createBottomTabNavigator({
  SupermanStack,
  ProgressStack,
  SettingsStack
});

tabNavigator.path = "";

export default tabNavigator;
