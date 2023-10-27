import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import QuestionForm from "../components/QuestionForm";
import LoadingScreen from "./LoadingScreen";
import ResultScreen from "./ResultScreen";
import { getDrinkIdeas } from "../api/api";

export default function HomeScreen() {
  const [base, setBase] = useState("");
  const [flavor, setFlavor] = useState("");
  const [fruit, setFruit] = useState("");
  const [strength, setStrength] = useState("");
  const [restriction, setRestriction] = useState("");

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState("");

  const handleFormSubmit = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    setResult("");
    try {
      const response = await getDrinkIdeas(
        base,
        flavor,
        fruit,
        strength,
        restriction
      );
      setResult(response);
    } catch (err) {
      Alert.alert("Couldn't generate cocktails idea.", err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  const onTryAgain = () => {
    setResult("");
  };

  if (result) {
    return <ResultScreen result={result} onTryAgain={onTryAgain} />;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.title}>"Mix It Up!" 🍹</Text>
          <Text style={styles.subtitle}>
            Answer these questions to craft the perfect cocktail for you.
          </Text>

          {/* <QuestionsForm /> */}
          <QuestionForm
            base={base}
            flavor={flavor}
            fruit={fruit}
            strength={strength}
            restriction={restriction}
            setBase={setBase}
            setFlavor={setFlavor}
            setFruit={setFruit}
            setStrength={setStrength}
            setRestriction={setRestriction}
            handleFormSubmit={handleFormSubmit}
          />

          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
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
  subtitle: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 2,
  },
  input: {
    fontSize: 16,

    borderColor: "#353740",
    borderWidth: 1,
    borderRadius: 4,

    padding: 16,
    marginTop: 6,
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    color: "gray",
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
});
