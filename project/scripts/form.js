document.addEventListener("DOMContentLoaded", function () {
    const recipeForm = document.getElementById('recipeForm');

    // recieve the data from the form
    recipeForm.addEventListener("submit", function (event) {

        const title = document.getElementById("recipe-title").value;
        const imgUrl = document.getElementById("image-url").value;
        const ingredientsRaw = document.getElementById("ingredients").value;
        const instructions = document.getElementById("instructions").value;
        const servings = document.getElementById("servings").value;

        const ingredients = ingredientsRaw.split("\n").map(ing => ing.trim()).filter(ing => ing);

        // save to localStorage
        let recipes = JSON.parse(localStorage.getItem("userRecipes")) || [];

        recipes.push({
            title,
            imgUrl,
            ingredients,
            instructions,
            servings
        });

        localStorage.setItem("userRecipes", JSON.stringify(recipes));
    });
});