import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/screens/auth/login/login";
import Cadastro from "./src/screens/auth/cadastro/cadastro";
import Treinar from "./src/screens/main/Treinar/Treinar";
import Aprender from "./src/screens/main/aprender/aprender";
import Ranking from "./src/screens/main/ranking/ranking";
import Grupos from "./src/screens/main/grupos/grupos";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
        />

        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
        />

        <Stack.Screen
          name="Treinar"
          component={Treinar}
        />

        <Stack.Screen
          name="Aprender"
          component={Aprender}
        />

        <Stack.Screen
          name="Ranking"
          component={Ranking}
        />

        <Stack.Screen
          name="Grupos"
          component={Grupos}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}