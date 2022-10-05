// get data using fetch
    // set up a function that gets the show data and then do something with the converted data
function getShows() {
    fetch('https://api.tvmaze.com/shows')
    .then((res) => res.json())
    // .then(showData => console.log("showData", showData))   
    .then(showData => showData.forEach(show => renderShow(show)))
    .catch(error => alert(error))  
}

getShows();


// render data to the DOM
    // Set up a function that generates each card.
    // note: function declaration renderShow() will be hoisted.
function renderShow(show) {
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
    button.id = show.id

    showCollection.append(div)   
    div.append(h2, h3, p, button);
}

// set up a function that generates a card if we don't get any data.
function returnNone() {
    const div = document.createElement("div")
    div.className = "show-class"
    const h2 = document.createElement("h1")
    h2.textContent = "☹️"
    const h3 = document.createElement("h3")
    h3.textContent = "No Shows Found"

    div.append(h1, h3)
    container.appendChild(div)

}

// function getAllShowsBySearch(show) {
//     fetch(BASE_URL + `?q=${show}`)
//     .then(res => res.json())
//     .then(data => data.forEach(renderShow)) 
//     .catch(error => alert(error))
// }
// document.addEventListener("DOMContentLoaded", getAllShowsBySearch)


// add event listener and extract whatever user has typed in.
// get each show's name, image, and rating.
// function handleShows() {
//     const form = document.querySelector("#show-form")
//     form.addEventListener("submit", function (e) {
//         e.preventDefault()
//         //form.elements.query.value // to get input value
//     })
// }

// async & await
// wrap errors in a try-catch
// const loadShows = async () => {
//     try {
//         const res = await fetch("https://api.tvmaze.com/shows")
//         const data = await res.json()
//         console.log(data)
//     } catch (error) {
//         alert(error)
//     }
// }

// loadShows();

// const form = document.querySelector('show-form')
// form.addEventListener("submit", function (e) {
//     e.preventDefault()
//     const searchTerm = form.elements.query.value
//     fetch(`https://api.tvmaze.com/search/shows/${searchTerm}`)
//     form.elements.query.value = "" // empty input

// })

// const createImages = (shows) => {
//     for (let show of shows) {
//         if (res.show.image) {
//             const img = document.createElement("img");
//             img.src = res.show.image.medium;
//             document.body.append(img);
//         }
            
        
//     }
// }