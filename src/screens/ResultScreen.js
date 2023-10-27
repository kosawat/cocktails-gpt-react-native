import {
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";
import React from "react";

export default function ResultScreen({ result, onTryAgain }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>
          Here are some great cocktails ideas for you! 🍹 💡
        </Text>
        <Text style={styles.result}>{result}</Text>
        <Pressable onPress={onTryAgain} style={styles.button}>
          <Text style={styles.buttonText}>Try again</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 5,
  },
  button: {
    marginTop: "auto",
    backgroundColor: "#10a37f",
    padding: 16,
    borderRadius: 4,
    alignItems: "center",
    marginVertical: 6,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  result: {
    padding: 10,
    fontSize: 16,
  },
});
