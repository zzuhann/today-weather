const todayWeatherMenuItem = document.getElementById("today-weather");
todayWeatherMenuItem.addEventListener("click", function () {
  fetch("template/todayWeather.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("content").innerHTML = html;
    })
    .then(() => {
      const searchButtonElement = document.getElementById("search-button");
      searchButtonElement.addEventListener("click", function () {
        const cityInput = document.getElementById("city");
        const countryInput = document.getElementById("country");
        const cityInputValue = cityInput.value;
        const countryInputValue = countryInput.value;
        fetchWeatherDataByCountryAndCity(cityInputValue, countryInputValue);
      });
    })
    .catch((error) => {
      console.log("error fetching:", error);
    });
});

function fetchWeatherDataByCountryAndCity(city, country) {
  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather",
    data: {
      q: `${city}, ${country}`,
      units: "metric",
      appid: "0cbfb602c7dbbb3653fda45bbf1ec1bf",
    },
    type: "GET",
    dataType: "json",
  }).done(function (json) {
    if (json) {
      const { main, description } = json.weather[0];
      const { humidity, temp_min, temp_max } = json.main;
      const iconCssName = getIconCssName(main);
      const innerHTML = `
        <div class='main-container'>
            <div class='icon ${iconCssName}'></div>
            <div>
                <h2 class='weather-title'>${main}</h2>
                <p class='weather-description'>${description}</p>
            </div>
        </div>
        <p>Temperature: ${temp_min}˚C ~ ${temp_max}˚C</p>
        <p>Humidity: ${humidity}%</p>
        `;
      document.getElementById("weather-content").innerHTML = innerHTML;
    }
  });
}

function getIconCssName(main) {
  if (main === "Clouds") return "cloud";
  if (main === "Rain") return "rain";
  if (main === "Clear") return "clear";
  else return "other";
}
