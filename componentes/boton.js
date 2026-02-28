import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Footer({ currentScreen, onNavigate })
{
  return (
    <View style={styles.footer}>
      {["Screen1", "Screen2", "Screen3"].map((screen, i) => (
        <TouchableOpacity
          key={i}
          style={[
            styles.btn,
            currentScreen === screen && styles.btnActive,
          ]}
          onPress={() => onNavigate(screen)}
        >
          <Text style={styles.btnText}>{`Botón ${i + 1}`}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 65,
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnActive: {
    backgroundColor: "#ddd",
  },
  btnText: {
    fontSize: 16,
  },
});