// dom elements
var submitCityEl = document.getElementById("submit-btn");
var cityInputValue = document.querySelector("#city");
var searchHistoryQueEl = document.getElementById("search-history-que");
var weatherContainerEl = document.getElementById("weather-container");



//variables
var searchHistory =[];
var apiKey = "30b5c74fd23bcc43c7f01f9048eaa31b"; //30b5c74fd23bcc43c7f01f9048eaa31b
var cityName = "Albuquerque";
var weatherDescription = "";
var weatherIcon;
var kelvin = 0;
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
    var emptyDivContainerEl = document.createElement("div");
    var cityNameEl = document.createElement("h2");
    var cityTemperatureEl = document.createElement("p");
    var iconEl = document.createElement("img");

    //do math to covert to farenheit
    kelvin = cityName.main.temp;
    var fahrenheit = ((kelvin - 273.15) * (9/5) + 32);
    var fahrenheitOneDigit = fahrenheit.toFixed(1);

    //weather description
    weatherDescription = cityName.weather[0].description;

    //weather icon
    weatherIcon = cityName.weather[0].icon;
    console.log(weatherIcon);

    //img src
    iconEl.src = "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";

    //add text to innerhtml
    cityNameEl.innerHTML = cityName.name;
    cityTemperatureEl.innerHTML = "Temperature: " + fahrenheitOneDigit;
    console.log(cityTemperatureEl);

    //add class to elements
    cityNameEl.className = "col-9";
    cityTemperatureEl.className = "col -6";


    //append to dom
    emptyDivContainerEl.appendChild(cityNameEl);
    emptyDivContainerEl.appendChild(cityTemperatureEl);
    emptyDivContainerEl.appendChild(iconEl);
    
    
    weatherContainerEl.appendChild(emptyDivContainerEl);


    
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