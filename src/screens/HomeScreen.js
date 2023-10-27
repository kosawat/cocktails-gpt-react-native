import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import QuestionsForm from "../components/QuestionsForm";
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
          <ScrollView style={{ padding: 10 }}>
            <Text style={[styles.label, { fontWeight: "bold" }]}>
              1. Flavor Preferences
            </Text>
            <Text style={styles.label}>
              Do you have any particular flavor preferences? Are you in the mood
              for something sweet, sour, bitter, or something else?
            </Text>
            <TextInput
              placeholder="E.g., Sweet, Sour, Balanced"
              style={styles.input}
              value={flavor}
              onChangeText={setFlavor}
            />

            <Text style={[styles.label, { fontWeight: "bold" }]}>
              2. Base Spirit
            </Text>
            <Text style={styles.label}>
              Do you have a preferred base spirit? Would you like something with
              vodka, gin, rum, tequila, whiskey, or a non-alcoholic option?
            </Text>
            <TextInput
              placeholder="E.g., Gin, Whiskey, Rum"
              style={styles.input}
              value={base}
              onChangeText={setBase}
            />

            <Text style={[styles.label, { fontWeight: "bold" }]}>
              3. Strength
            </Text>
            <Text style={styles.label}>
              Would you like a strong cocktail, a lighter option, or something
              in between? Any preference for the alcohol content?
            </Text>
            <TextInput
              placeholder="E.g., strong, light, balanced"
              style={styles.input}
              value={strength}
              onChangeText={setStrength}
            />

            <Text style={[styles.label, { fontWeight: "bold" }]}>
              4. Fruit or Citrus
            </Text>
            <Text style={styles.label}>
              Do you enjoy cocktails with fruit or citrus elements, like lemon,
              lime, or orange? Or would you prefer something more herbal or
              spicy?
            </Text>
            <TextInput
              placeholder="E.g., lemon, lime, orange"
              style={styles.input}
              value={fruit}
              onChangeText={setFruit}
            />

            <Text style={[styles.label, { fontWeight: "bold" }]}>
              5. Allergies or Restrictions
            </Text>
            <Text style={styles.label}>
              Do you have any allergies or dietary restrictions we should be
              aware of when selecting your drink?
            </Text>
            <TextInput
              placeholder="E.g., no sparkling wine, or no restriction"
              style={styles.input}
              value={restriction}
              onChangeText={setRestriction}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => handleFormSubmit()}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </ScrollView>

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
