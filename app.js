let cityName = document.querySelector(".city-Name");
let descriptionText = document.querySelector(".description");
let degreeEl = document.querySelector(".degreeEl");
let degreeNum = document.querySelector(".degree-num");
let degUnit = document.querySelector(".degUnit");
let weatherIcon = document.querySelector(".icon");
window.addEventListener("load", () => {
  let lat, long;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      api = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=`;
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { city_name, temp } = data.data[0];
          const { description, icon } = data.data[0].weather;
          cityName.textContent = city_name;
          descriptionText.textContent = description;
          degreeNum.textContent = temp;
          degUnit.textContent="C"
          weatherIcon.setAttribute(
            "src",
            `https://www.weatherbit.io/static/img/icons/${icon}.png`
          );
        });
    });
  }
});
