import {
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";

export default function QuestionForm({
  base,
  flavor,
  fruit,
  strength,
  restriction,
  setBase,
  setFlavor,
  setFruit,
  setStrength,
  setRestriction,
  handleFormSubmit,
}) {
  return (
    <ScrollView style={{ padding: 10 }}>
      <Text style={[styles.label, { fontWeight: "bold" }]}>
        1. Flavor Preferences
      </Text>
      <Text style={styles.label}>
        Do you have any particular flavor preferences? Are you in the mood for
        something sweet, sour, bitter, or something else?
      </Text>
      <TextInput
        placeholder="E.g., Sweet, Sour, Balanced"
        style={styles.input}
        value={flavor}
        onChangeText={setFlavor}
      />

      <Text style={[styles.label, { fontWeight: "bold" }]}>2. Base Spirit</Text>
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

      <Text style={[styles.label, { fontWeight: "bold" }]}>3. Strength</Text>
      <Text style={styles.label}>
        Would you like a strong cocktail, a lighter option, or something in
        between? Any preference for the alcohol content?
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
        Do you enjoy cocktails with fruit or citrus elements, like lemon, lime,
        or orange? Or would you prefer something more herbal or spicy?
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
        Do you have any allergies or dietary restrictions we should be aware of
        when selecting your drink?
      </Text>
      <TextInput
        placeholder="E.g., no sparkling wine, or no restriction"
        style={styles.input}
        value={restriction}
        onChangeText={setRestriction}
      />

      <Pressable style={styles.button} onPress={() => handleFormSubmit()}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
