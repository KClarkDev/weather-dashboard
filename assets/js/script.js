const apiKey = "5aa42c93621e0e9d914b602b246b72b2"; // OpenWeather API Key

// DOM element
const cityInput = document.querySelector("#search-input");

// Retrieve the text value and assign it to a variable
const city = cityInput.value;

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
var queryURL =
  "http://api.openweathermap.org/data/2.5/weather?q=" +
  city +
  "&appid=" +
  apiKey;

fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //return the data
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });

// TODO: retrieve search input text and retrieve current and future weather data for that city

// TODO: Add search term to localStorage and display on the page as a button that can be clicked to re-run that search
