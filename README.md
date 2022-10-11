# TeleSearch - TV Show Finder app

My phase-1-project is a television show finder app called, 'TeleSearch'. TeleSearch is a JS application that leverages DOM manipulation to interact with the user. I built this project because I enjoy watching TV whenever I have a moment to spare, 
but I find that most of my time is wasted trying to find the perfect show. TeleSearch is designed for user's like myself to give time back from searching to put towards watching.

![TeleSearch-logo](https://user-images.githubusercontent.com/108310591/194971805-868da697-9830-42b3-a320-dff336149258.jpg)
## License

[MIT](https://choosealicense.com/licenses/mit/)


## 🔗 Links
[![my_portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/minchulan)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/minchulan/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/itsminchul)


## Lessons Learned

In Phase 1, I learned basic javaScript as well as modern javaScript (ES6) that includes destructuring, arrow functions, and the spread operator. Furthermore, I learned about the DOM and DOM manipulation, along with events (e.g., event listeners and event handlers). Importantly, I learned to code with user experience in mind which entails utilizing asynchronous code, such as when fetching data with an external API or internal db.json 


## Installation

To install, just fork and clone this repository. Once you cloned it in your terminal, make sure you `cd` into the correct folder.
    
## API Reference

#### GET HTTP Request

```http
  URL: /search/shows?q=:query
```
Example:
| KEY       | VALUE    | DESCRIPTION                |
| :-------- | :------- | :------------------------- |
| `q`       | `dark`   | https://api.tvmaze.com/search/shows?q=girls |



## Assignment By

This is the phase 1 project for the SENG flex program by:

- Flatiron School


## Features

- Button hover cursor pointer
- Button hover box shadow
- Button color transitions
- Live preview search
- Google API fonts


## Tech Stack

**Client:** JavaScript

**Server:** Web API


## Roadmap

- Additional browser support

- Add more integrations


### Deliverables

- On page load, dynamically render a list of tv shows in the `div.show-section` container. You can
  fetch your tv show search input from `https://api.tvmaze.com/search/shows?q=${searchTerm}`.
- When a user searches for a tv show, display the tv show name, image, rating, summary, and 'More Info' button.
- When a user clicks the 'More Info' button, it opens window that points to the show url value provided by the external API.
- When a user searches for a tv show, a live preview of the search input text appears above the search input field.
### Example

The below screenshots demonstrate the working functionality of the app.

<img width="1669" alt="CleanShot 2022-10-10 at 20 37 46@2x" src="https://user-images.githubusercontent.com/108310591/194972878-c160aac8-1307-4744-8cfd-234306bac5b4.png">
<img width="1664" alt="CleanShot 2022-10-10 at 20 38 40@2x" src="https://user-images.githubusercontent.com/108310591/194972884-489e5da9-69e3-4d1c-ae9c-8f9d22f1a183.png">
