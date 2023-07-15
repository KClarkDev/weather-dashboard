const apiKey = "5aa42c93621e0e9d914b602b246b72b2"; // OpenWeather API Key

// DOM elements
const cityInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-btn");
var cityNames = [];

searchButton.addEventListener("click", function () {
  // When the search button is clicked, retrieve the text value and assign it to a variable
  var city = cityInput.value;
  console.log(`The city entered is ${city}`);
  cityNames.push({
    cityName: city,
  });
});

function initHistory() {
  // If available, retrieve previously queried city names from local storage
  if (localStorage.getItem("cityNames")) {
    cityNames = JSON.parse(localStorage.getItem("cityNames")); //converts from JSON back to an array
  }
}

function searchCity() {
  localStorage.setItem("cityNames", JSON.stringify(cityNames));
}
//   // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//   var queryURL =
//     "http://api.openweathermap.org/data/2.5/weather?q=" +
//     city +
//     "&appid=" +
//     apiKey;

//   fetch(queryURL)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       //return the data
//       console.log(data);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

// TODO: retrieve search input text and retrieve current and future weather data for that city

// TODO: Add search term to localStorage and display on the page as a button that can be clicked to re-run that;
