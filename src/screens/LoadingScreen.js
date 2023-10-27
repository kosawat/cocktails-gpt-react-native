import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function LoadingScreen() {
  return (
    <View style={styles.loadingContainer}>
      <Text style={styles.title}>
        Looking for the perfect cocktails ideas 🍹 💡
      </Text>
      <Text>Loading ...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 5,
  },
});
