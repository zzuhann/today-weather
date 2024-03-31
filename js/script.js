const dataAnalysisMenuItem = document.getElementById("data-analysis");
dataAnalysisMenuItem.addEventListener("click", function () {
  fetch("template/dataAnalysis.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("content").innerHTML = html;
    })
    .catch((error) => {
      console.log("error fetching:", error);
    });
});

const todayWeatherMenuItem = document.getElementById("today-weather");
todayWeatherMenuItem.addEventListener("click", function () {
  fetch("template/todayWeather.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("content").innerHTML = html;
    })
    .catch((error) => {
      console.log("error fetching:", error);
    });
});
