document.addEventListener("DOMContentLoaded", () => {
  getShows()
})

function getShows() {
  const form = document.querySelector("#show-form")
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = document.querySelector("#show-input").value;
    fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    .then((res) => res.json())
    .then((shows) =>
      shows.length > 0 ? shows.forEach(makeShows) : returnNone()
    )
    .catch((error) =>
      console.log(`Error: ${error}`)
    )
    e.target.reset()
    container.innerHTML = ""
  })
}

const container = document.querySelector(".show-section")

function makeShows(show) {
  const card = document.createElement("div");
  const img = document.createElement("img");
  const name = document.createElement("h3");
  const rating = document.createElement("h4");
  const paragraph = document.createElement("p");
  const button = document.createElement("button");
  const button2 = document.createElement("button");

  card.setAttribute("class", "show-card");
  img.setAttribute("class", "show-image");
  name.setAttribute("class", "show-name");
  rating.setAttribute("class", "show-rating");
  paragraph.setAttribute("class", "show-paragraph");
  button.setAttribute("class", "show-info");
  button2.setAttribute("class", "like-button");

  name.innerText = show.show.name.toUpperCase();
  img.src = show.show.image.medium
  img.alt = "show cover image";
  rating.innerText = `Rating: ${show.show.rating.average}`;
  paragraph.innerText = show.show.summary.slice(3, -4);
  button.innerText = "Show Info";
  button.addEventListener("click", () => window.open(show.show.url));
  button2.innerText = "❤️";
  // button2.addEventListener("click", () => {
  //   for (let i = 0; i >= input; i++) {
  //       input.value = parseInt(input.value) + 1;
  //       alert(input);
  //   }
  // });

  card.append(name, img, rating, paragraph, button, button2);
  container.append(card);
}


function returnNone() {
  const div = document.createElement("div")
  div.setAttribute("class", "show-card")
  const h3 = document.createElement("h3")
  h3.textContent = "☹️ No Shows Found!"
  container.appendChild(div)
  div.append(h3)
}

