const apiKey = "YOUR_API_KEY"; // yahan apni API key daal

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;

  if (city === "") return;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("cityName").textContent = data.name;
      document.getElementById("temp").textContent = "🌡️ " + data.main.temp + "°C";
      document.getElementById("desc").textContent = data.weather[0].description;
    })
    .catch(() => {
      alert("City not found!");
    });
});