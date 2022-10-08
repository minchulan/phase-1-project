document.addEventListener("DOMContentLoaded", getShows);

function getShows() {
    const form = document.querySelector("#show-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const searchTerm = document.querySelector("#show-input").value;
      fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
      .then(res => res.json())
      .then(data => data.length > 0 ? data.forEach(makeShows) : returnNone())
      .catch(error => console.log(`Error: ${error}`))
      e.target.reset()
      container.innerHTML = ""
    })
}

const container = document.querySelector(".show-section");

function makeShows(show) {
    const div = document.createElement("div")
    const img = document.createElement("img")
    const name = document.createElement("name")
    const rating = document.createElement('rating')
    const button = document.createElement('button')

    div.setAttribute("class", "show-card");
    img.setAttribute('class', 'show-image')
    name.setAttribute('class', 'show-name')
    rating.setAttribute('class', 'show-rating')
    button.setAttribute('class', 'watch-now')
   
    name.innerText = show.show.name
    img.src = show.show.image.medium
    img.alt = 'show cover image'
    rating.innerText = `Rating: ${show.show.rating.average}`
    button.innerText = 'Watch Now'
    button.addEventListener("click", () => window.open(show.show.url));
    
    div.append(name, img, rating, button);
    container.append(div); 
}
 
function returnNone() {
        const div = document.createElement("div");
        div.setAttribute("class", "show-card");
        const h2 = document.createElement("h2");
        h2.textContent = "☹️";
        const h3 = document.createElement("h3");
        h3.textContent = "No Shows Found";

        container.appendChild(div);
        div.append(h2, h3);
}
