# TeleSearch - TV Show Finder app
Built as a JS application that leverages DOM manipulation for dynamic interactivity, Telesearch is a lightweight 'tv show finder app' that saves users from TV search hell. I chose a TV show app finder for my phase 1 project because on a personal level watching tv is one way I decompress after a stressful workday; consider it my self-care practice if you will. However, if you're anything like me then you've experienced TV search hell, or spending 80% of your time trying to find that perfect show. Telesearch aims to solve this problem. Built with the end user in mind, TeleSearch's lightweight functionality is designed to save time from search and be put towards more time to enjoy! 

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


## Features

- Search input random color display
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


## Deliverables

- On page load, dynamically render a list of tv shows in the `div#show-section` container. You can
  fetch your tv show search input from `https://api.tvmaze.com/search/shows?q=${searchTerm}`.
- When a user searches for a tv show, display the tv show name, image, rating, summary, and 'Get Link' button.
- When a user clicks the 'Get Link' button, it alerts the show url.
- When a user types TV Show Title in the search input field, a live preview of the search input populates in real time in h2 text.
- When a user hovers over all buttons, the button itself is styled with transitions (color, border-color, box-shadow, transform at 0.25s) and hover is styled with a cursor pointer, box-shadow color #ff7c43, and border color #f1ff5c.
- When a user clicks on the #teleSearchLogo, search results are cleared. 

## Example

The below screenshots demonstrate the working functionality of the app.

<img width="1669" alt="CleanShot 2022-10-10 at 20 37 46@2x" src="https://user-images.githubusercontent.com/108310591/194972878-c160aac8-1307-4744-8cfd-234306bac5b4.png">
<img width="1664" alt="CleanShot 2022-10-10 at 20 38 40@2x" src="https://user-images.githubusercontent.com/108310591/194972884-489e5da9-69e3-4d1c-ae9c-8f9d22f1a183.png">
<img width="1664" alt="CleanShot 2022-10-13 at 15 57 07@2x" src="https://user-images.githubusercontent.com/108310591/195697731-3af7b70c-0619-4c0a-abb0-9e81b00ddfca.png">
<img width="1664" alt="CleanShot 2022-10-13 at 15 54 16@2x" src="https://user-images.githubusercontent.com/108310591/195697731-3af7b70c-0619-4c0a-abb0-9e81b00ddfca.png">
<img width="1664" alt="CleanShot 2022-10-13 at 15 54 16@2x" src="https://user-images.githubusercontent.com/108310591/195697744-b9d56f9a-0343-438c-b32e-4e48822c6b37.png">
<img width="1664" alt="CleanShot 2022-10-13 at 15 52 00@2x" src="https://user-images.githubusercontent.com/108310591/195697749-1b1c764b-505b-427a-a8bd-8f59cbee8afe.png">
