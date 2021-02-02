console.log("Hello there!");
// requestURL + "?apikey=" + apiKey + "&s=" + input.value + "&r=json"
const requestURL = 'http://www.omdbapi.com/?t=';
const apiKey = '&apikey=ec3b0f3b';

const form = document.querySelector('#search')
let p = document.createElement('p')
let titleList = document.querySelector('#titleList');
titleList.appendChild(p)

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




form.addEventListener("submit", (evt) => {
    evt.preventDefault()

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
                if (movieInfo.Rated === "G" || movieInfo.Rated === "PG") {
                    p.textContent = `${movieInfo.Title} is family friendly, it is rated: ${movieInfo.Rated}`
                } else if (movieInfo.Rated === "PG-13"){
                    p.textContent = `${movieInfo.Title} may require supervision for younger kids, it is rated: ${movieInfo.Rated}`
                } else {
                    p.textContent = `Save this movie for date night. ${movieInfo.Title} is rated: ${movieInfo.Rated}`
               
                }

                // BUTTON INFO
                // const link = document.querySelector('#more-info')
                //     let btn = document.createElement('button')
                //     btn.type = 'button'
                //     btn.innerHTML = 'More Info'
                //     btn.className = 'btn-info'
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

                        // for (let key in movieInfo){
                            
                        //     if (key === "Poster" && movieInfo[key] !== "N/A" ) {
                        //         element = document.createElement('img')
                        //         element.setAttribute('src', movieInfo[key])
                                
                        //     }else {
                        //         element = document.createElement('p')
                        //         element.textContent= (key + ": " + movieInfo[key])
                                
                        //     }
                        //     showInfo.append(element)
                        // }
                        // let element = document.createElement('p')
                        // p.textContent = `${movieInfo.Title} ${movieInfo.Rated} ${movieInfo.Plot} ` 
                        // showInfo.appendChild(p)
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
//     document.getElementById("main-container").innerHTML = '';
// }


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







// fetch(requestURL)
// // onc the request is made and the response comes back the .then function runs its callback
// .then(function(responseData) {
//     // when an API rresponse with JSON, we need to parse/translate it into a regular JS object
//     return responseData.json();
// })
// .then((parseData) => {
//     // test the response with console.log()
//     console.log("=======>", parseData);
//     let movieInfo = parseData.rated;
//     li.textContent = `${movieInfo}`
// });

