// Setting URL 
const requestURL = 'https://www.omdbapi.com/?t=';
const apiKey = '&apikey=ec3b0f3b';

// Selecting html elements and creating tags
const form = document.querySelector('#search')

let showInfo = document.querySelector('#show-info')
const link = document.querySelector('#more-info')
// Adding the more info button
let btn = document.createElement('button')
btn.type = 'button'
btn.innerHTML = 'More Info'
btn.className = 'btn-info'

// Attaching the event listener
form.addEventListener("submit", (evt) => {
    evt.preventDefault()

    // Reseting the main container by cleaning all the inner content
    document.getElementById("titleList").innerText = '';
    document.getElementById("more-info").innerText = '';
    document.getElementById("show-info").innerText = '';

    // Selecting the element
    let input = document.querySelector('#title')

    // Requesting API data via fetch
    fetch(requestURL + input.value + apiKey + "&r=json" )
   
        .then(function(responseData) {           
            return responseData.json();
        })
        .then((parseData) => {
            
            // setting variable with the fetched data        
            let movieInfo = parseData;
            const ratedMsg =(movieInfo) =>{
                document.getElementById('main-container').style.background ="rgb(241, 135, 1)";
                let p = document.createElement('p')
                let titleList = document.querySelector('#titleList');
                titleList.appendChild(p)
                if (movieInfo.Response === "False"){
                    p.textContent = `${movieInfo.Error} Please check your spelling and try again.`
                }
                else if (movieInfo.Rated === "G" || movieInfo.Rated === "PG") {
                    p.textContent = `PERFECT FOR TONIGHT! ${movieInfo.Title.toUpperCase()} is family friendly, it is rated: ${movieInfo.Rated}`
                } else if (movieInfo.Rated === "PG-13"){
                    p.textContent = `${movieInfo.Title.toUpperCase()} may require supervision for young kids, it is rated: ${movieInfo.Rated}`
                } else {
                    p.textContent = `Save this movie for Date Night. ${movieInfo.Title.toUpperCase()} is rated: ${movieInfo.Rated}`               
                }

                btn.onclick = function(){
                    document.getElementById("show-info").innerText = '';
                    subset = (({
                        Title, Year, Rated, Genre, Director, Actors, Plot, Poster 
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
                };
                link.appendChild(btn)
            }
            ratedMsg(movieInfo)
            input.value = ''            
        })
        .catch((error) => {
            console.error("ERROR: ", error)
        })
})





