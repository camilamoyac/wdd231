function displayUserRecipes(data) {
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

        button.addEventListener('click', () => {
            displayRecipeDetails(recipe);
        });
    });
}

const cardContainer = document.querySelector(".cookbook-container");
const savedRecipes = JSON.parse(localStorage.getItem("userRecipes")) || [];
displayUserRecipes(savedRecipes);
