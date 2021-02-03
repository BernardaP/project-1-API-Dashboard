console.log("Hello there!");
// requestURL + "?apikey=" + apiKey + "&s=" + input.value + "&r=json"
const requestURL = 'http://www.omdbapi.com/?t=';
const apiKey = '&apikey=ec3b0f3b';

const form = document.querySelector('#search')
// let p = document.createElement('p')
// let titleList = document.querySelector('#titleList');
// titleList.appendChild(p)

let showInfo = document.querySelector('#show-info')
const link = document.querySelector('#more-info')
let btn = document.createElement('button')
btn.type = 'button'
btn.innerHTML = 'More Info'
btn.className = 'btn-info'

// document.getElementById('reset-btn').onclick = function(){
//     document.getElementById('main-container').innerHTML = ''
// }

// const resetBtn = document.querySelector('#reset-btn')


form.addEventListener("submit", (evt) => {
    evt.preventDefault()

    document.getElementById("titleList").innerText = '';
    document.getElementById("more-info").innerText = '';
    document.getElementById("show-info").innerText = '';

    let input = document.querySelector('#title')

    fetch(requestURL + input.value + apiKey + "&r=json" )
   
        .then(function(responseData) {
           
            return responseData.json();
        })
        .then((parseData) => {
            // test the response with console.log()
            console.log("=======>", parseData);

            // let movieInfo = parseData.Rated;
            let movieInfo = parseData;
            const ratedMsg =(movieInfo) =>{
                let p = document.createElement('p')
                let titleList = document.querySelector('#titleList');
                titleList.appendChild(p)
                if (movieInfo.Response === "False"){
                    p.textContent = `${movieInfo.Error} Please check your spelling and try again.`
                }
                else if (movieInfo.Rated === "G" || movieInfo.Rated === "PG") {
                    p.textContent = `${movieInfo.Title} is family friendly, it is rated: ${movieInfo.Rated}`
                } else if (movieInfo.Rated === "PG-13"){
                    p.textContent = `${movieInfo.Title} may require supervision for younger kids, it is rated: ${movieInfo.Rated}`
                } else {
                    p.textContent = `Save this movie for date night. ${movieInfo.Title} is rated: ${movieInfo.Rated}`
               
                }

                btn.onclick = function(){
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


// function handleClick(e) {
//     e.preventDefault()     
//     document.getElementById("titleList").innerText = '';
//     document.getElementById("more-info").innerText = '';
//     document.getElementById("show-info").innerText = '';
//     console.log('click')
// }

// resetBtn.addEventListener("click", handleClick)
// BUTTON INFO
// const link = document.querySelector('#more-info')
//                     let btn = document.createElement('button')
//                     btn.type = 'button'
//                     btn.innerHTML = 'MoreInfo'
//                     btn.className = 'btn-info'
//                     btn.onclick = function(){
//                         let showInfo = document.querySelector('#show-info')
//                         let p = document.createElement('p')
//                         p.textContent = `${movieInfo.Title} ${movieInfo.Rated} ${movieInfo.Plot} ` 
//                         showInfo.appendChild(p)
//                     };
//                     link.appendChild(btn)




// const resetBtn = document.querySelector('#reset-btn')
// resetBtn.addEventListener("click", handleClick)
  

// const btn = document.querySelector('#more-info')
// let link = document.createElement('button')
// let infoLink = document.querySelector('more-info')
// infoLink.appendChild(link)

// INFO BUTTON
// function moreInf() {
//     const link = document.querySelector('#more-info')
//     let btn = document.createElement('button')
//     btn.type = 'button'
//     btn.innerHTML = 'MoreInfo'
//     btn.className = 'btn-info'
//     // btn.onclick = function(){
//     //     let showInfo = document.querySelector('#show-info')
//     //     let p = document.createElement('p')
//     //     p.textContent = `${movieInfo.Title} ${movieInfo.Rated} ${movieInfo.Plot} ` 
//     //     showInfo.appendChild(p)
//     // };
//     link.appendChild(btn)
// }

// moreInf()



