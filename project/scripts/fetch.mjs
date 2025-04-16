// JSON data fetch used in recipe-cards.js
export async function fetchData() {
    try {
        const response = await fetch("./data/recipes.json");
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// API fetch used in cookbook.js
export async function fetchNutrition(ingredientText, servings) {
    const apiKey = "23d5085df35241b79a997659e9d88d51";

    const response = await fetch(`https://api.spoonacular.com/recipes/parseIngredients?apiKey=${apiKey}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            ingredientList: ingredientText,
            servings: 1,
            includeNutrition: true
        }),
    });

    if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data;
}