const weather = document.querySelector("#weather p:first-child");
const city = document.querySelector("#weather p:last-child");
const API_KEY = "1612b9ecc3bfb2675ac83c0b9de7dc01";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  // fetch(url);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = `You are in ${data.name} today!`;
      weather.innerText = `${data.weather[0].main} / ${
        parseInt(data.main.temp) - 273
      }°C`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
