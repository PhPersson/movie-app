"use strict";
// Philip Persson al4570


var searchForm = document.getElementById("search-form");
var resultDisplayer = document.getElementById("result");
searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var searchText = this.query.value; //För att få ut strängen som användaren söker på
    if (searchText) {
        fetchMovie(searchText);
    } else {
        alert("U need to enter a title to search for!");
    }
});



function fetchMovie(movieToSeachFor) {

    var apikey = '879e41a8';

    var apiRequest = new XMLHttpRequest();

    var omdbAPIUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=" + apikey + "&s="+movieToSeachFor+"&type=movie";

    apiRequest.addEventListener("load", function() {
        var result = JSON.parse(this.responseText);
        
        console.log(result)
        if(result.Response != "False") {
            resultDisplayer.innerHTML = '';
            handleResponse(result);
         } else {
            alert("Couldn't find that movie! \nThe error was: "+ result.Error);
        }

    });
    apiRequest.open("GET", omdbAPIUrl, true);
    apiRequest.send();


}

// Funktion för att gå igenom alla resultat från Apiet. Skapar sedan matchande divar till detta resultat.
function handleResponse(response) {
    response.Search.map(function(movie) {
            createDiv(movie);
    });
}



function createDiv(movie) {
    resultDisplayer.innerHTML += `
    <div id="movieDiv" "class="card">
                <div">
                <h4><b>${movie.Title}</b></h4>
                <p>${movie.Year}</p>
                <img class="imgClass" src="${movie.Poster}">
            </div>
    </div>`;
}