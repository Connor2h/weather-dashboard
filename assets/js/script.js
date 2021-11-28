var submitCityEl = document.getElementById("submit-btn");
var cityInputValue = document.querySelector("#city");
var searchHistoryQueEl = document.getElementById("search-history-que");
var weatherContainerEl = document.getElementById("weather-container");




var searchHistory =[];
var apiKey = "30b5c74fd23bcc43c7f01f9048eaa31b"; //30b5c74fd23bcc43c7f01f9048eaa31b
var cityName = "Albuquerque";
var dateToday;
var temp;
var wind;
var humidity;
var uvIndex;


//async function to fetch the openweather api
async function startWeather(cityName) {
    //adds cityName and apiKey to the fetch url
    const responseWeather = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey)
    const dataWeather = await responseWeather.json()

    createCity(dataWeather);
    
}


fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey).then(res => res.json())
.then(data => console.log(data));

//when button clicks store
submitCityEl.addEventListener("click", function(){
    event.preventDefault();
    console.log(cityInputValue.value);
    cityName = cityInputValue.value;

    searchHistory.push(cityName);
    console.log(searchHistory);

    //store local storage
    localStorage.setItem("cityName", cityName);
    createCityBtns(searchHistory);

    startWeather(cityName);


    //



    //startWeather(cityName);
})

function createCityBtns(searchHistory) {
    for(var i = 0; i < searchHistory.length; i++){
        searchHistoryQueEl.innerHTML = "";

        //create button element
        var searchHistoryBtnEl = document.createElement("button");

        //give ids
        searchHistoryBtnEl.id = "id-" + searchHistory[i];

    
        //assign text to element
        searchHistoryBtnEl.innerHTML = searchHistory[i];

    
        //append btn to history que
        searchHistoryQueEl.prepend(searchHistoryBtnEl);
    
    }
}

function createCity(cityName) {

    //reset container to have nothing in it
    weatherContainerEl.innerHTML = "";

    //create dom elements
    var cityNameEl = document.createElement("h2");

    //add text to innerhtml
    cityNameEl.innerText = cityName.name;


    //append to dom
    weatherContainerEl.appendChild(cityNameEl);



    
}





// async function start() {


// }

// start();





// var getUserRepos = function(user) {
//     // format the github api url
//     var apiUrl = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=" + apiKey;
//     console.log(apiUrl);


//     // make a request to the url
//     fetch(apiUrl)
//         .then(function(response) {
//             // request was successful
//             if (response.ok) {
//             response.json().then(function(data) {
//                 displayRepos(data, user);
//             });
//             } else {
//             alert('Error: GitHub User Not Found');
//             }
//         })
//         .catch(function(error) {
//             // Notice this `.catch()` getting chained onto the end of the `.then()` method
//             alert("Unable to connect to GitHub");
//         });
// };

// getUserRepos();

function getWeather(cityName) {
    
}