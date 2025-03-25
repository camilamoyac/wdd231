const cardContainer = document.querySelector(".spotlights");

async function fetchData() {
    try {
        const response = await fetch("./data/members.json");
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
    const premiumMembers = data.companies.filter(company => company.memberLevel === 2 || company.memberLevel === 3);
    const spotlightCompanies = getRandomCompanies(premiumMembers);

    spotlightCompanies.forEach(company => {

        let card = document.createElement("section");
        let name = document.createElement("h2");
        let logo = document.createElement("img");
        let phone = document.createElement("p");
        let website = document.createElement("a");
        let address = document.createElement("p");

        if (company.memberLevel == 2) {
            card.setAttribute("class", "silver");
        }
        else if (company.memberLevel == 3) {
            card.setAttribute("class", "gold");
        }

        name.textContent = company.companyName;
        phone.textContent = company.phone;
        address.textContent = company.address;

        logo.setAttribute("src", company.logo);
        logo.setAttribute("alt", `${company.companyName} logo`);
        logo.setAttribute("width", 200);
        logo.setAttribute("height", 133);
        logo.setAttribute("class", "optional");
        logo.setAttribute("loading", "lazy");

        website.textContent = company.website;
        website.setAttribute("href", company.website);
        website.setAttribute("target", "_blank");

        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(address);

        cardContainer.appendChild(card);
    });
}

function getRandomCompanies(companies) {
    const shuffled = companies.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
}