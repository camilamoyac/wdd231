const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");
        let birthDate = document.createElement("p");
        let birthPlace = document.createElement("P");

        fullName.innerHTML = `${prophet.name} ${prophet.lastname}`;

        birthDate.innerHTML = `Date of birth: ${prophet.birthdate}`;

        birthPlace.innerHTML = `Place of birth: ${prophet.birthplace}`;

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of prophet ${prophet.name} ${prophet.lastname}, ${prophet.order}th Latter-day President.`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", 300);
        portrait.setAttribute("height", 400);

        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        cards.appendChild(card);
    })
}

getProphetData();