// get data using fetch
    // set up a function that gets the show data and then o something with the converted data
function getShows() {
    fetch('https://api.tvmaze.com/shows')
    .then((res) => res.json())
    // .then(shows => console.log("shows", shows))   
    .then(shows => shows.forEach(show => renderShows(show)))
    .catch(error => alert(error))  
}

getShows();


// set up a function that generates each card by rendering data to the DOM
    // note: function declaration renderShow() will be hoisted.
function renderShows(show) {
    const showCollection = document.getElementById("show-list"); // div section will contain all search results
    const div = document.createElement("div")
    const h2 = document.createElement("h2");
    h2.textContent = "📺";
    const img = document.createElement("img")
    img.src = show.image.medium
    img.alt = "show cover image"
    img.classList.add("show-image");
    const h3 = document.createElement("h3");
    h3.textContent = show.name;
    // const h4 = document.createElement("h4")
    // h4.textContent = `Rating: ${show.rating.average}`
    const p = document.createElement("p");
    p.textContent = `
        Rating: ${show.rating.average}
        Genre: ${show.genres}
        Summary: ${show.summary}
        Link: ${show.url}
    `
    const button = document.createElement("button")
    button.classList.add("watch-btn")
    button.textContent = "Watch"
    button.addEventListener("click", () => window.open(show.url))

    showCollection.appendChild(div)   
    div.append(h2, h3, p, button, img);
}

// set up a function that generates a card if we don't get any data back.
function returnNone() {
    const div = document.createElement("div")
    div.className = "show-class"
    const h2 = document.createElement("h2")
    h2.textContent = "☹️"
    const h3 = document.createElement("h3")
    h3.textContent = "No Shows Found"

    showCollection.appendChild(div);
    div.append(h1, h3)

}



const corsHeaders = {
    'Access-Control-Allow-Headers' : '*',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Origin' : '*'
}

// Generate a card based on user input using the search API endpoint 
const form = document.querySelector("#show-form");
form.addEventListener("submit", function (e) {
    e.preventDefault()
    const searchTerm = e.target[0].value

    async function handleRequest(request) {
        if (request.method === "OPTIONS") {
          return new Response("OK", { headers: corsHeaders });
        }
        if (request.method === "POST") {
          return getImages(request);
        }
    }

        const getImages = async request => {
            const { query } = await request.json()
            fetch(`https://api.tvmaze.com/search/shows/${searchTerm}`)
            .then((res) => res.json())
            .then((data) => {
                const img = document.createElement("img");
                createImages(show);
                // title, summary, image, rating, genre, link
        
            })  
    }
});


const createImages = (shows) => {
    for (let show of shows) {
        if (show.image) {
            const img = document.createElement("img")
             img.src = show.image.medium;
             img.alt = "show cover image";
             document.body.append(img);
        } 
    }
}


