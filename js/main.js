console.log("Hello there!");

const requestURL = 'http://www.omdbapi.com/?t=';
const apiKey = '&apikey=ec3b0f3b';

const form = document.querySelector('#search')
let p = document.createElement('p')
let titleList = document.querySelector('#titleList');
titleList.appendChild(p)


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
                if (movieInfo.Rated === "G" || "PG") {
                    p.textContent = `${movieInfo.Title} movie is family friendly, it is rated: ${movieInfo.Rated}`
                } else if (movieInfo.Rated === "PG-13"){
                    p.textContent = `This movie may require suppervion for younger kids, it is rated: ${movieInfo.Rated}`
                } else {
                    p.textContent = `Save this movie for date night, it is rated: ${movieInfo.Rated}`
               
                }

            }
            ratedMsg(movieInfo)
            // for (let key in movieInfo){
            //     console.log(`movieInfo.${key} = ${movieInfo[key]}`)
            // }
            // p.textContent = `${movieInfo}`
        })

        .catch((error) => {
            console.error("ERROR: ", error)
        })

})





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

