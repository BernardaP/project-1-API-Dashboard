# API Dashboard Project 

This is a movie rated search app created with Javascript that fetches information from a public movies API

## App name: Watchables
![Mobile view](./img/watchables-api-dashboard.png?raw=true )

## Technologies used:
This app used the following:
- OMDB API: Open Movie Database API 
- JavaScript
- HTML
- CSS

## User Stories
The **main users** are busy parents that want to know if the movie they picked to  watch during family time is appropriate to watch it with their kids

- As a user, I want to know if a movie is kids friendly, so that I can watched at family night.
- As a user, I would like to know the specific movie rating.
- As a user, I want an option to see more information about the movie.
- As a user, I would like to use this app on mobile devices.

## Wireframe
![Wireframe](./img/api-dashb-wireframe.png?raw=true)

## Major Hurdles / Unsolved Problems
**Major Hurdles**
- Structuring and figuring out the location of each block of code was challenging.
- Fetching specific information from the API was the most challenging problem, after getting help and reading MDN documentation the issue was solved by creating a  subsection of the object and iterating using a for in loop. 
    
    ```
    subset = (({Title, Year, Rated, Genre, Director, Actors, Plot, Poster 
    }) => ({Title, Year, Rated, Genre, Director, Actors, Plot, Poster })) (movieInfo)

    for (let key in subset){
        if (key === "Poster" && subset[key] !== "N/A" ) {
            element = document.createElement('img')
            element.setAttribute('src', subset[key])
            
        }else {
            element = document.createElement('p')
            element.textContent= (key + ": " + subset[key])                         
        }
        showInfo.append(element)
    }                    

    ```

- Implementing a reset button was also a complication that eventually got solved with two different approaches: 
    - Creating a functional button. 
    - Using the initial submit button to clear the content. 
    The second approach was taken because it is user centric.

**Unsolved Problems**

Ideally the “More Info” button should be disable if a movie title cannot be found, if it’s misspelled or there is not movie title submitted. At the moment, this button can be clicked and shows the information fields as undefined.  




