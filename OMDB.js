//89122647

function search(){
    console.log("Searching...");
    let inputTag = document.getElementById("name")
    let movieName = inputTag.value;
    let key = "89122647";
    let url = "http://www.omdbapi.com/?apikey="+key+"&t="+movieName; 
    console.log(url);

    let httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", url);
    httpRequest.responseType = "json";
    httpRequest.send();

    httpRequest.onload = function(){
        let movie = httpRequest.response;
        let imgTag = document.getElementById("poster");
        imgTag.src = movie.Poster;
        let plotTag = document.getElementById("plot");
        plotTag.innerHTML = movie.Plot;
        let movieNameTag = document.getElementById("movieName");
        movieNameTag.innerHTML = movie.Title;
        let yearTag = document.getElementById("year");
        yearTag.innerHTML = "Year : "+ movie.Year;
        let actorsTag = document.getElementById("actors");
        actorsTag.innerHTML = "Actors : "+ movie.Actors;
        let directorTag = document.getElementById("director");
        directorTag.innerHTML = "Director : "+ movie.Director;
        let runtimeTag = document.getElementById("runtime");
        runtimeTag.innerHTML = "Runtime : "+ movie.Runtime;

    }
}