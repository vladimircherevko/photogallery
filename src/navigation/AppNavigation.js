import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";

import { MainScreen } from "./MainScreen";
import { ImageScreen } from "./ImageScreen";
import { THEME } from "../theme";

const navOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: (Platform.OS === "android" && THEME.MAIN_COLOR) || "#fff"
    },
    headerTintColor: (Platform.OS === "android" && "#fff") || THEME.MAIN_COLOR
  }
};

const MainNavigator = createStackNavigator(
  {
    "Photo Gallery": MainScreen,
    Image: ImageScreen
  },
  navOptions
);

export const AppNavigation = createAppContainer(MainNavigator);
