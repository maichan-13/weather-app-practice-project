let currentDate = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[currentDate.getDay()];

let hour = currentDate.getHours();
let minute = currentDate.getMinutes();

let changeDate = document.querySelector(".day");
changeDate.innerHTML = `${currentDay}`;

let changeTime = document.querySelector(".time");
if (minute < 10) {
  changeTime.innerHTML = ` ${hour}:0${minute}`;
} else {
  changeTime.innerHTML = ` ${hour}:${minute}`;
}

function showTemperature(response) {
  console.log(response.data);
  let showCity = document.querySelector("#city");
  let showTemp = document.querySelector("#numDegrees");
  let temperature = Math.round(response.data.main.temp);
  let city = response.data.name;
  let description = document.querySelector("h5");
  let showWind = document.querySelector("#wind");
  let maxTemp = document.querySelector("#maxTemp");
  let minTemp = document.querySelector("#minTemp");

  showCity.innerHTML = `${city}`;
  showTemp.innerHTML = `${temperature}`;
  description.innerHTML = response.data.weather[0].description;
  showWind.innerHTML = Math.round(response.data.wind.speed);
  maxTemp.innerHTML = Math.round(response.data.main.temp_max);
  minTemp.innerHTML = Math.round(response.data.main.temp_min);
}

function cityTemp(event) {
  event.preventDefault();
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let cityName = document.querySelector("#enter-city").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

let searchCity = document.querySelector("#city-form");
searchCity.addEventListener("submit", cityTemp);
