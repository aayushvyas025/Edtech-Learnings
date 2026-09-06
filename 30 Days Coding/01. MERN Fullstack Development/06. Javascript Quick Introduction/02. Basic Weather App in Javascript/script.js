document.addEventListener("DOMContentLoaded", () => {
  const weatherCodes = {
    0: ["Clear sky", "☀️"],
    1: ["Mostly clear", "🌤️"],
    2: ["Partly cloudy", "⛅"],
    3: ["Overcast", "☁️"],
    45: ["Foggy", "🌫️"],
    48: ["Foggy", "🌫️"],
    51: ["Light drizzle", "🌦️"],
    53: ["Drizzle", "🌦️"],
    55: ["Heavy drizzle", "🌦️"],
    61: ["Light rain", "🌧️"],
    63: ["Rain", "🌧️"],
    65: ["Heavy rain", "🌧️"],
    71: ["Light snow", "🌨️"],
    73: ["Snow", "🌨️"],
    75: ["Heavy snow", "❄️"],
    80: ["Rain showers", "🌦️"],
    81: ["Rain showers", "🌦️"],
    82: ["Violent showers", "⛈️"],
    95: ["Thunderstorm", "⛈️"],
    96: ["Thunderstorm with hail", "⛈️"],
    99: ["Thunderstorm with hail", "⛈️"],
  };

  const gradients = {
    clear: ["#2b3a67", "#4a5f8f"],
    cloud: ["#3c4667", "#5b6577"],
    rain: ["#1f2a3d", "#2f3d52"],
    snow: ["#3a4560", "#6b7a99"],
    storm: ["#181d2e", "#2a2f45"],
  };

  function bucket(code) {
    if ([0, 1].includes(code)) return "clear";
    if ([2, 3, 45, 48].includes(code)) return "cloud";
    if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return "rain";
    if ([71, 73, 75].includes(code)) return "snow";
    if ([95, 96, 99].includes(code)) return "storm";
    return "clear";
  }

  const statusEl = document.getElementById("status");
  const currentEl = document.getElementById("current");
  const forecastEl = document.getElementById("forecast");
  const searchBtn = document.getElementById("searchBtn");

  const dayFormatter = new Intl.DateTimeFormat(undefined, {
    weekday: "short",
  });

  async function geoCode(city) {
    try {
      const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        city
      )}&count=1&language=en&format=json`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Geocoding request failed");
      }

      const data = await response.json();

      if (!data.results?.length) {
        return null;
      }

      return data.results[0];
    } catch (error) {
      console.error("Geocode Error:", error.message);
      return null;
    }
  }

  async function getWeather(lat, lon) {
    const url =
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
      `&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m` +
      `&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=5`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Weather request failed");
      }

      return await response.json();
    } catch (error) {
      console.error("Weather Error:", error.message);
      return null;
    }
  }

  function setBackground(weatherCode) {
    const key = bucket(weatherCode);
    const [top, bottom] = gradients[key];

    document.body.style.background = `linear-gradient(160deg, ${top}, ${bottom})`;
  }

  function render(place, weather) {
    const current = weather.current;
    const code = current.weather_code;

    const [label, emoji] = weatherCodes[code] || ["Unknown", "❓"];

    document.getElementById("place").textContent = place.name;

    document.getElementById("placeSub").textContent = [
      place.admin1,
      place.country,
    ]
      .filter(Boolean)
      .join(", ");

    document.getElementById("icon").textContent = emoji;

    document.getElementById("temp").textContent =
      `${Math.round(current.apparent_temperature)}°C`;

    document.getElementById("humidity").textContent =
      `${current.relative_humidity_2m}%`;

    document.getElementById("wind").textContent =
      `${Math.round(current.wind_speed_10m)} km/h`;

    document.getElementById("condition").textContent = label;

    setBackground(code);

    currentEl.classList.add("show");
    forecastEl.classList.add("show");
    statusEl.style.display = "none";

    forecastEl.innerHTML = "";

    const days = weather.daily.time;

    for (let i = 0; i < days.length; i++) {
      const weatherCode = weather.daily.weather_code[i];
      const [, emoji] = weatherCodes[weatherCode] || ["", "❓"];

      const max = Math.round(weather.daily.temperature_2m_max[i]);
      const min = Math.round(weather.daily.temperature_2m_min[i]);

      const dayName =
        i === 0
          ? "Today"
          : dayFormatter.format(new Date(days[i]));

      const card = document.createElement("div");

      card.className = "day";

      card.innerHTML = `
        <div class="day-name">${dayName}</div>
        <div class="day-icon">${emoji}</div>
        <div class="day-temps">
          <span class="day-max">${max}°</span>
          <span class="day-min">${min}°</span>
        </div>
      `;

      forecastEl.appendChild(card);
    }
  }

  async function search(city) {
    statusEl.style.display = "block";
    statusEl.className = "status";
    statusEl.textContent = "Searching...";

    currentEl.classList.remove("show");
    forecastEl.classList.remove("show");

    searchBtn.disabled = true;

    try {
      const place = await geoCode(city);

      if (!place) {
        statusEl.className = "status error";
        statusEl.textContent = `Couldn't find "${city}".`;
        return;
      }

      const weather = await getWeather(place.latitude, place.longitude);

      if (!weather) {
        statusEl.className = "status error";
        statusEl.textContent = "Unable to fetch weather.";
        return;
      }

      render(place, weather);
    } catch (error) {
      statusEl.className = "status error";
      statusEl.textContent =
        "Something went wrong while fetching weather.";

      console.error(error);
    } finally {
      searchBtn.disabled = false;
    }
  }

  document
    .getElementById("searchForm")
    .addEventListener("submit", (event) => {
      event.preventDefault();

      const city = document
        .getElementById("cityInput")
        .value
        .trim();

      if (city) {
        search(city);
      }
    });

  document.getElementById("cityInput").value = "Indore";
  search("Indore");
});