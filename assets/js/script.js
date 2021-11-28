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
var lat;
var lon;
var dateToday;
var temp;
var wind;
var humidity;
var uvIndex = 0;


//async function to fetch the openweather api
async function startWeather(cityName) {
    //adds cityName and apiKey to the fetch url
    const responseWeather = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey)
    const dataWeather = await responseWeather.json()

    var latLon = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+ dataWeather.coord.lat + "&lon="+ dataWeather.coord.lon +"&exclude={part}&appid="+ apiKey)
    var latLonConversion = await latLon.json()

    createCity(dataWeather, latLonConversion);
    
}

//when button clicks store
submitCityEl.addEventListener("click", function(){
    //prevent page from loading
    event.preventDefault();

    cityName = cityInputValue.value;

    //store names in array
    searchHistory.push(cityName);

    //store local storage
    localStorage.setItem("cityName", cityName);
    createCityBtns(searchHistory);

    startWeather(cityName);

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

function createCity(cityName, latLonConversion) {

    //get index from other api
    uvIndex =latLonConversion.current.uvi;
    
    //reset container to have nothing in it
    weatherContainerEl.innerHTML = "";

    //create dom elements
    var emptyDivContainerEl = document.createElement("div");
    var cityNameEl = document.createElement("h2");
    var cityTemperatureEl = document.createElement("p");
    var cityHumidityEl = document.createElement("p");
    var cityWindSpeedEl = document.createElement("p");
    var iconEl = document.createElement("img");
    var uvIndexEl = document.createElement("p");

    //do math to covert to farenheit
    kelvin = cityName.main.temp;
    var fahrenheit = ((kelvin - 273.15) * (9/5) + 32);
    var fahrenheitOneDigit = fahrenheit.toFixed(1);

    //weather description
    weatherDescription = cityName.weather[0].description;

    //weather icon
    weatherIcon = cityName.weather[0].icon;

    //img src
    iconEl.src = "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";

    //add text to innerhtml
    cityNameEl.innerHTML = cityName.name;
    cityTemperatureEl.innerHTML = "Temperature: " + fahrenheitOneDigit + " ℉";
    cityHumidityEl.innerHTML = "Humidity: " + cityName.main.humidity + "%";
    cityWindSpeedEl.innerHTML = "Wind Speed: " + cityName.wind.speed + " mph";
    uvIndexEl.innerHTML = "Uv Index: " + uvIndex;

    //add class to elements
    cityNameEl.className = "col-9";
    cityTemperatureEl.className = "col -6";
    cityHumidityEl.className = "col -6";
    cityWindSpeedEl.className = "col -6";
    uvIndexEl.className = "col -6";


    //append to dom
    emptyDivContainerEl.appendChild(cityNameEl);
    emptyDivContainerEl.appendChild(iconEl);
    emptyDivContainerEl.appendChild(cityTemperatureEl);
    emptyDivContainerEl.appendChild(cityHumidityEl);
    emptyDivContainerEl.appendChild(cityWindSpeedEl);
    emptyDivContainerEl.appendChild(uvIndexEl);
    
    //append div to weather container
    weatherContainerEl.appendChild(emptyDivContainerEl);

    
}

function getWeather(cityName) {
    
}