//calling all of my necessesary variables 
var cityWeather = $("#currentCityWeather");
var cityTemp = $("#currentCityWeather")
var cityHumid = $("#humidity");
var cityWind = $("#currentCityWeather");
var cityUv = $("#currentCityWeather");
var cityForecast = $("#fiveDayForecast")
var userSearchWeather = [];
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?id=";
var apikey = "929046c14f802b1921f3e5291affd2c0";


//function loads weather searches 
function weatherSearches () {
    var userInput = localStorage.getItem("SearchHistory");
    if (userInput !== null) {
        console.log(userInput);
        var localweatherSearch = JSON.parse(value);
        if (localweatherSearch !== null) {
            searchHistory = localweatherSearch
        }
    }
}




//function to show last search 





//function to append weather data to card 




//function create url for weather icon 

function weatherIcon (response) {
    return "https://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png";
}


//ajax function


function currentWeather (cityID) {
    queryURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + "forecast?id=" + cityID + "&APPID=" + apikey;
    console.log (queryURL);
    $.ajax ( {
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    })
}




