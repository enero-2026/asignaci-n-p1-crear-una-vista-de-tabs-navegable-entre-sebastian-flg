import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Screen1({ route }) {
  const { title } = route.params || { title: "Screen1" };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{title}</Text>

      {Array.from({ length: 30 }).map((_, i) => (
        <Text key={i} style={styles.textItem}>
          Item {i + 1} en {title}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    alignItems: "center",
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  textItem: {
    fontSize: 18,
    marginVertical: 5,
  },
});