const apiKey = "adc5b402e3193223a68cdb12496b3912";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBotton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    // console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "SkyCast Weather App Image/cloud.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "SkyCast Weather App Image/rain.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "SkyCast Weather App Image/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "SkyCast Weather App Image/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "SkyCast Weather App Image/mist.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "SkyCast Weather App Image/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBotton.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

searchBox.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});
