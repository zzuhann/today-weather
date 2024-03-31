const dataAnalysisMenuItem = document.getElementById("data-analysis");
dataAnalysisMenuItem.addEventListener("click", function () {
  fetch("template/dataAnalysis.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("content").innerHTML = html;
    })
    .then(() => {
      const chartElement = document.getElementById("chart");
      const data = {
        labels: ["2007", "2008", "2009", "2010", "2011", "2012", "2013"],
        datasets: [
          {
            label: "Men",
            data: [106898, 103937, 99492, 87213, 101943, 118848, 103120],
          },
          {
            label: "Female",
            data: [97516, 94796, 91818, 79673, 94684, 110633, 95993],
          },
        ],
      };

      new Chart(chartElement, {
        type: "line",
        data: data,
        options: {
          plugins: {
            title: {
              display: true,
              text: "Birth in Taiwan",
            },
          },
        },
      });
    })
    .catch((error) => {
      console.log("error fetching:", error);
    });
});
