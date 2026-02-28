import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Screen1 from "./screens/screen1";
import Screen2 from "./screens/screen2";
import Screen3 from "./screens/screen3";
import Footer from "./componentes/boton";

const Stack = createNativeStackNavigator();

export default function App()
{
  const [currentScreen, setCurrentScreen] = React.useState("Screen1");

  const navigationRef = React.useRef();

  const onNavigate = (screenName) => {
    setCurrentScreen(screenName);
    navigationRef.current?.navigate(screenName, { title: screenName });
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Screen1"
          >
            <Stack.Screen name="Screen1" component={Screen1} />
            <Stack.Screen name="Screen2" component={Screen2} />
            <Stack.Screen name="Screen3" component={Screen3} />
          </Stack.Navigator>
        </View>
        <Footer currentScreen={currentScreen} onNavigate={onNavigate} />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, paddingBottom: 65 },
});