const handleLoadPage = () => {
  getShows();
};

document.addEventListener("DOMContentLoaded", handleLoadPage);


function getShows() {
  const form = document.querySelector("#show-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = document.querySelector("#show-input").value;
    fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
      .then((res) => res.json())
      .then((shows) =>
        shows.length > 0 ? shows.forEach(makeShows) : returnNone()
      )
      .catch(error => console.log(error));
    e.target.reset();
    container.innerHTML = "";
  });
}

const container = document.querySelector(".show-section");

function makeShows(show) {
  const div = document.createElement("div");
  div.id = `show-card-${show.id}`;
  div.className = "show-card";

  const img = document.createElement("img");
  img.setAttribute("class", "show-image");
  img.src = show.show.image.medium;

  const h3 = document.createElement("h3");
  h3.setAttribute("class", "show-name");
  h3.innerText = show.show.name.toUpperCase();

  const rating = document.createElement("h4");
  rating.setAttribute("class", "show-rating");
  rating.innerText = `Rating: ${show.show.rating.average}`;

  const paragraph = document.createElement("p");
  paragraph.setAttribute("class", "show-paragraph");
  paragraph.innerText = show.show.summary.slice(3, -4);

  const button = document.createElement("button");
  button.id = `show-button-${show.id}`
  button.className = "show-link";
  button.textContent = "Get Link";
  button.addEventListener("click", () => alert(show.show.url));

  div.append(h3, img, rating, paragraph, button);
  container.append(div);
}

function returnNone() {
  const div = document.createElement("div");
  div.setAttribute("class", "show-card");
  const h3 = document.createElement("h3");
  h3.textContent = "☹️ No Shows Found!";
  container.appendChild(div);
  div.append(h3);
}

const input = document.querySelector("#show-input");
const h2 = document.querySelector("h2");
input.addEventListener("input", (e) => (h2.innerText = input.value));

const logo = document.querySelector("#teleSearchLogo");
logo.addEventListener("mouseover", (e) => console.log(e));
