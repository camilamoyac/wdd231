const itemContainer = document.querySelector(".item-cards");

async function fetchItems() {
    try {
        const response = await fetch("./data/items.json");
        if (response.ok) {
            const file = await response.json();
            console.log(file); // testing only
            displayCards(file); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

fetchItems();

function displayCards(file) {
    file.items.forEach(item => {
        const section = document.createElement("section");
        const name = document.createElement("h2");
        const figure = document.createElement("figure");
        const image = document.createElement("img");
        const address = document.createElement("address");
        const description = document.createElement("p");
        const learnMore = document.createElement("button");

        name.textContent = item.name;

        image.setAttribute("src", item.image_url);
        image.setAttribute("alt", `Photo of ${item.name}.`);
        image.setAttribute("width", 300);
        image.setAttribute("height", 200);
        image.setAttribute("loading", "lazy");

        description.textContent = item.description;

        address.textContent = item.address;

        learnMore.textContent = "Learn More";

        figure.appendChild(image);

        section.appendChild(name);
        section.appendChild(figure);
        section.appendChild(description);
        section.appendChild(address);
        section.appendChild(learnMore);

        itemContainer.appendChild(section);
    })
}