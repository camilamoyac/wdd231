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
    });
}