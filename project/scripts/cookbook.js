async function fetchNutrition(ingredientText, servings) {
    const apiKey = "23d5085df35241b79a997659e9d88d51"; // Replace with your actual Spoonacular API key

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

function displayUserRecipes(data) {
    // before recipes are added
    if (data.length === 0) {
        const placeholder = document.createElement("div");
        placeholder.classList.add("placeholder");

        placeholder.innerHTML = `
          <img src="images/empty-cookbook.png" alt="Empty cookbook.">
          <p>Your cookbook is empty. Add some delicious recipes to get started!</p>
        `;

        cardContainer.appendChild(placeholder);
        return;
    }

    data.forEach(recipe => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let image = document.createElement("img");
        let button = document.createElement("button");

        name.textContent = recipe.title;

        image.setAttribute("src", recipe.imgUrl || "images/default-image.png");
        image.setAttribute("alt", `Picture of ${recipe.title}.`);
        image.setAttribute("loading", "lazy");

        button.textContent = "See full recipe";

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(button);

        cardContainer.appendChild(card);
        // call modal function
        button.addEventListener('click', () => {
            displayModal(recipe);
        });
    });
}

const cardContainer = document.querySelector(".cookbook-container");
// getting recipes from localStorage
const savedRecipes = JSON.parse(localStorage.getItem("userRecipes")) || [];
displayUserRecipes(savedRecipes);

// modal dialog
const dialogBox = document.querySelector("#dialogBox");

async function displayModal(recipe) {
    const ingredientsList = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');

    // get nutrition
    const nutDataArray = await Promise.all(
        recipe.ingredients.map(ingredient => fetchNutrition(ingredient, recipe.servings))
    );

    const totals = {};
    for (const nutData of nutDataArray) {
        const nutrients = nutData[0].nutrition.nutrients;
        for (const nutrient of nutrients) {
            const { name, amount, unit } = nutrient;
            if (!totals[name]) {
                totals[name] = { amount: 0, unit };
            }
            totals[name].amount += amount;
        }
    }

    function formatNutrient(name) {
        if (totals[name]) {
            return `${totals[name].amount.toFixed(1)} ${totals[name].unit}`;
        }
        return "N/A";
    }

    dialogBox.innerHTML = `
    <button id="closeButton">✖</button>
    <h2>${recipe.title}</h2>
    <h3>This recipe makes ${recipe.servings} servings.</h3>
    <h3>Ingredients:</h3>
    <ul>
        ${ingredientsList}
    </ul>
    <h3>Instructions:</h3>
    <p>${recipe.instructions}</p>
    <h3>Nutritional Information (for one serving):</h3>
    <p><strong>Calories</strong>: ${formatNutrient("Calories")}</p>
    <p><strong>Fat</strong>: ${formatNutrient("Fat")}</p>
    <p><strong>Protein</strong>: ${formatNutrient("Protein")}</p>
    <p><strong>Carbohydrates</strong>: ${formatNutrient("Carbohydrates")}</p>
    <p><strong>Sodium</strong>: ${formatNutrient("Sodium")}</p>
    <p><strong>Fiber</strong>: ${formatNutrient("Fiber")}</p>
    `;

    // Show the dialog
    dialogBox.showModal();

    closeButton.addEventListener("click", () => {
        dialogBox.close();
    });
}

