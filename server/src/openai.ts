import OpenAI from "openai";

export async function getDrinkIdeas(
  base: String,
  flavor: String,
  fruit: String,
  strength: String,
  restriction: String
) {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY || "YOUR_OPENAI_API_KEY",
    });

    const completion = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt: generatePrompt(base, flavor, fruit, strength, restriction),
      temperature: 0.6,
      max_tokens: 2048,
    });
    return { result: completion.choices[0].text };
  } catch (err) {
    console.log("Error at getDrinkIdeas", err);
    throw err;
  }
}

function generatePrompt(
  base: String,
  flavor: String,
  fruit: String,
  strength: String,
  restriction: String
) {
  return `Create a drink recipe with the following preferences:
  - Base Spirit: ${base}
  - Flavor Preferences: ${flavor}
  - Fruit or Citrus: ${fruit}
  - Strength: ${strength}
  - Allergies or Restrictions: ${restriction}
  
  Act as expert mixologist, can you suggest 3 delightful drink recipes that matche these criteria?`;
}
