export async function getDrinkIdeas(
  base,
  flavor,
  fruit,
  strength,
  restriction
) {
  try {
    const response = await fetch(
      `${process.env.EXPO_PUBLIC_BASE_API_URL}/drinkideas`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ base, flavor, strength, fruit, restriction }),
      }
    );
    const data = await response.json();
    return data.result;
  } catch (err) {
    throw err;
  }
}
