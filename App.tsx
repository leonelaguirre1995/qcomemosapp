const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Bienvenida1 from "./screens/Bienvenida1";
import Bienvenida2 from "./screens/Bienvenida2";
import AndroidLarge1 from "./screens/AndroidLarge1";
import PrimerVision2 from "./screens/PrimerVision2";
import Rectangle1 from "./components/Rectangle1";
import PrimerVision1 from "./screens/PrimerVision1";
import AndroidLarge2 from "./screens/AndroidLarge2";
import OpcionesParaDesayunar from "./screens/OpcionesParaDesayunar";
import Bienvenida from "./screens/Bienvenida";
import Login from "./screens/Login";
import PrimerVision from "./screens/PrimerVision";
import AgregarLugar from "./screens/AgregarLugar";
import Perfil from "./screens/Perfil";
import AndroidLarge from "./screens/AndroidLarge";
import FormularioDeRegistro from "./screens/FormularioDeRegistro";
import AndroidLarge3 from "./screens/AndroidLarge3";
import Maps from "./screens/Maps";
import Star from "./components/Star";
import QComemos from "./components/QComemos";
import Google from "./components/Google";
import GooglePlay from "./components/GooglePlay";
import Rectangle from "./components/Rectangle";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Recursive-Regular": require("./assets/fonts/Recursive-Regular.ttf"),
    "Fraunces-Regular": require("./assets/fonts/Fraunces-Regular.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Outfit-Regular": require("./assets/fonts/Outfit-Regular.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Bienvenida1"
              component={Bienvenida1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Bienvenida2"
              component={Bienvenida2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge1"
              component={AndroidLarge1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PrimerVision2"
              component={PrimerVision2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle1"
              component={Rectangle1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PrimerVision1"
              component={PrimerVision1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge2"
              component={AndroidLarge2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OpcionesParaDesayunar"
              component={OpcionesParaDesayunar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Bienvenida"
              component={Bienvenida}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PrimerVision"
              component={PrimerVision}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AgregarLugar"
              component={AgregarLugar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Perfil"
              component={Perfil}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge"
              component={AndroidLarge}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FormularioDeRegistro"
              component={FormularioDeRegistro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge3"
              component={AndroidLarge3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Maps"
              component={Maps}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
