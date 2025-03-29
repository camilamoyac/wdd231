const cardContainer = document.querySelector(".cards");

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
    data.companies.forEach(company => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let description = document.createElement("p");
        let logo = document.createElement("img");
        let phone = document.createElement("p");
        let email = document.createElement("p");
        let website = document.createElement("a");
        let address = document.createElement("p");

        if (company.memberLevel == 1) {
            card.setAttribute("class", "bronze");
        }
        else if (company.memberLevel == 2) {
            card.setAttribute("class", "silver");
        }
        else if (company.memberLevel == 3) {
            card.setAttribute("class", "gold");
        }

        name.textContent = company.companyName;

        description.textContent = company.description;
        description.setAttribute("class", "optional");

        phone.textContent = company.phone;

        email.textContent = company.email;
        email.setAttribute("class", "optional");

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
        card.appendChild(description);
        card.appendChild(logo);
        card.appendChild(phone);
        card.appendChild(email);
        card.appendChild(website);
        card.appendChild(address);

        cardContainer.appendChild(card);
    });
}