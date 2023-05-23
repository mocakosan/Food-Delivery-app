import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "./src/pages/Settings";
import Orders from "./src/pages/Orders";
import Delivery from "./src/pages/Delivery";
import { useState } from "react";
import SignIn from "./src/pages/SignIn";
import SignUp from "./src/pages/SignUp";
import { Provider, useSelector } from "react-redux";
import store from "./src/store";
import { RootState } from "./src/store/reducer";
import AppInner from "./AppInner";

export type LoggedInParamList = {
  Orders: undefined;
  Settings: undefined;
  Delivery: undefined;
  Complete: { orderId: string };
};

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};
function App() {
  return (
    <Provider store={store}>
      <AppInner />
    </Provider>
  );
}

export default App;
