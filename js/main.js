console.log("Hello there!");

fetch('http://www.omdbapi.com/?t=batman&apikey=ec3b0f3b')
// onc the request is made and the response comes back the .then function runs its callback
.then(function(response) {
    // when an API rresponse with JSON, we need to parse/translate it into a regular JS object
    return response.json();
})
.then((parseData) => {
    // test the response with console.log()
    console.log("=======>", parseData);
});