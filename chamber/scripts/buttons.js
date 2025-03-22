const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const container = document.querySelector(".cards");

listButton.addEventListener("click", () => {
	container.classList.add("list");
	container.classList.remove("grid");
});

gridButton.addEventListener("click", () => {
	container.classList.add("grid");
	container.classList.remove("list");
});