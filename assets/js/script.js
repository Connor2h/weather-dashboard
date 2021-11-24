var apiKey = "808721e2dc63debd30d894b4d377543b";
var cityName;
var dateToday;
var temp;
var wind;
var humidity;
var uvIndex;


fetch("http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=" + apiKey).then(res => res.json())
.then(data => console.log(data));




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