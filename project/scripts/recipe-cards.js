const cardContainer = document.querySelector(".recipe-cards");

async function fetchData() {
    try {
        const response = await fetch("./data/recipes.json");
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

fetchData();

function displayResults(data) {
    data.recipes.forEach(recipe => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let division = document.createElement("div");
        let description = document.createElement("p");
        let image = document.createElement("img");
        let button = document.createElement("button");

        name.textContent = recipe.name;

        description.textContent = recipe.description;

        image.setAttribute("src", recipe.image_url);
        image.setAttribute("alt", `Picture of ${recipe.name}.`);
        image.setAttribute("width", 200);
        image.setAttribute("height", 200);
        image.setAttribute("loading", "lazy");

        button.textContent = "See full recipe";

        division.classList.add("flex-div");

        division.appendChild(image);
        division.appendChild(description);
        division.appendChild(button);

        card.appendChild(name);
        card.appendChild(division)

        cardContainer.appendChild(card);

        button.addEventListener('click', () => {
            displayRecipeDetails(recipe);
        });
    });
}

// modal dialog
const dialogBox = document.querySelector("#dialogBox");

function displayRecipeDetails(recipe) {
    const ingredientsList = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');

    dialogBox.innerHTML = `
    <button id="closeButton">✖</button>
    <h2>${recipe.name}</h2>
    <h3>This recipe makes 1 serving.</h3>
    <h3>Ingredients:</h3>
    <ul>
        ${ingredientsList}
    </ul>
    <h3>Instructions:</h3>
    <p>${recipe.instructions}</p>
    <h3>Nutritional Information (for one serving):</h3>
    <p><strong>Calories</strong>: ${recipe.nutritional_info.calories} kcal</p>
    <p><strong>Fat</strong>: ${recipe.nutritional_info.fat} g</p>
    <p><strong>Protein</strong>: ${recipe.nutritional_info.protein} g</p>
    <p><strong>Carbohydrates</strong>: ${recipe.nutritional_info.carbohydrates} g</p>
        <p><strong>Sodium</strong>: ${recipe.nutritional_info.sodium} mg</p>
        <p><strong>Dietary Fiber</strong>: ${recipe.nutritional_info.dietary_fiber} g</p>
    `;
    dialogBox.showModal();

    closeButton.addEventListener("click", () => {
        dialogBox.close();
    });
}