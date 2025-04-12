const myInfo = new URLSearchParams(window.location.search);

document.querySelector("#results").innerHTML = `
    <h3>Here are your recipe details</h1>
    <p><strong>Title:</strong> ${myInfo.get("title")}</p>
    <p><strong>Image URL:</strong> ${myInfo.get("image-url")}</p>
    <p><strong>Ingredients:</strong> ${myInfo.get("ingredients")}</p>
    <p><strong>Instructions:</strong> ${myInfo.get("instructions")}</p>
    <p><strong>Servings:</strong> ${myInfo.get("servings")}</p>
`;