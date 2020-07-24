//calling all of my necessesary variables 
var cityWeather = $("#currentCityWeather");
var cityTemp = $("#temp")
var cityHumid = $("#humidity");
var cityWind = $("#windSpeed");
var cityUv = $("#uvIndex");
var cityForecast = $("#fiveDayForecast");
var userSearchWeather = [];
var apikey = "929046c14f802b1921f3e5291affd2c0";
var cityButton = JSON.parse(localStorage.getItem("cityID"));
console.log(cityButton);

//everytime page loads , triggers function to click last button for me when page loads 
$(".history").trigger("click");


function saveButtons() {
        if (!cityButton) {
            return;
        } else { 
            for ( var i=0; i < cityButton.length; i++) {   
        console.log(cityButton);
        var newButton = $("<button>").text(cityButton[i]);
        newButton.attr("class", "hack");
        newButton.appendTo($(".history"));
    }};
}
saveButtons();

//function loads weather searches 
$("#search-button").click(function (event) {
    event.preventDefault();
    var newButton = $("<button>").text($("#search-value").val());
    newButton.attr("class", "hack");
    console.log($("#search-value").val())
    newButton.appendTo($(".history"));
    if (!cityButton) {
        userSearchWeather.push($("#search-value").val());
        localStorage.setItem("cityID", JSON.stringify(userSearchWeather));   
    } else {
    cityButton.push($("#search-value").val());
    localStorage.setItem("cityID", JSON.stringify(cityButton))};
});

$(document).on("click",".hack", function() {
    queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + $(this).text() + "&APPID=" + apikey + "&units=imperial";
    console.log (queryURL);
    $.ajax ( {
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response.name);
        cityWeather.text("City & Date: " + response.name + " " + moment.unix(response.dt).format("MM/DD/YYYY"));
        $("#icon1").attr("src", "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png");
        cityTemp.text("Temperature: " + response.main.temp);
        cityHumid.text("Humidity: " + response.main.humidity);
        cityWind.text("Wind Speed: " + response.wind.speed);
        var latlong = "https://api.openweathermap.org/data/2.5/onecall?lat=" + response.coord.lat + "&lon=" + response.coord.lon + "&exclude=current,minutely,hourly&appid=4aa00dba2ffa0a80a6d24790f15d7055&units=imperial";
        $.ajax ( {
            url: latlong,
            method: "GET"

        }).then(function (response) {
            console.log(latlong);
            console.log(response.daily[0].uvi);
            cityUv.text("UV Index: " + response.daily[0].uvi);
            $("#temp2").text("Temperature: " + response.daily[2].temp.day);
            $("#humidity2").text("Humidity: " +response.daily[2].humidity);
            $("#icon2").attr("src", "http://openweathermap.org/img/wn/" + response.daily[2].weather[0].icon + "@2x.png");

            $("#temp3").text("Temperature: " + response.daily[3].temp.day);
            $("#humidity3").text("Humidity: " +response.daily[3].humidity);
            $("#icon3").attr("src", "http://openweathermap.org/img/wn/" + response.daily[3].weather[0].icon + "@2x.png");

            $("#temp4").text("Temperature: " + response.daily[4].temp.day);
            $("#humidity4").text("Humidity: " +response.daily[4].humidity);
            $("#icon4").attr("src", "http://openweathermap.org/img/wn/" + response.daily[4].weather[0].icon + "@2x.png");

            $("#temp5").text("Temperature: " + response.daily[5].temp.day);
            $("#humidity5").text("Humidity: " +response.daily[5].humidity);
            $("#icon5").attr("src", "http://openweathermap.org/img/wn/" + response.daily[5].weather[0].icon + "@2x.png");

            $("#temp6").text("Temperature: " + response.daily[6].temp.day);
            $("#humidity6").text("Humidity: " +response.daily[6].humidity);
            $("#icon6").attr("src", "http://openweathermap.org/img/wn/" + response.daily[6].weather[0].icon + "@2x.png");

            })
    });
});









