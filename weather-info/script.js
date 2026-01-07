const districts = [
  { name: "Thiruvananthapuram", temp: 30, condition: "Cloudy", humidity: 70, wind: 14 },
  { name: "Kollam", temp: 31, condition: "Sunny", humidity: 68, wind: 13 },
  { name: "Pathanamthitta", temp: 29, condition: "Rainy", humidity: 75, wind: 10 },
  { name: "Alappuzha", temp: 30, condition: "Rainy", humidity: 78, wind: 16 },
  { name: "Kottayam", temp: 28, condition: "Cloudy", humidity: 74, wind: 9 },
  { name: "Idukki", temp: 24, condition: "Rainy", humidity: 80, wind: 8 },
  { name: "Ernakulam", temp: 31, condition: "Sunny", humidity: 67, wind: 15 },
  { name: "Thrissur", temp: 30, condition: "Cloudy", humidity: 69, wind: 12 },
  { name: "Palakkad", temp: 32, condition: "Sunny", humidity: 60, wind: 11 },
  { name: "Malappuram", temp: 31, condition: "Cloudy", humidity: 65, wind: 10 },
  { name: "Kozhikode", temp: 29, condition: "Rainy", humidity: 76, wind: 14 },
  { name: "Wayanad", temp: 25, condition: "Rainy", humidity: 82, wind: 9 },
  { name: "Kannur", temp: 30, condition: "Cloudy", humidity: 70, wind: 13 },
  { name: "Kasaragod", temp: 31, condition: "Sunny", humidity: 66, wind: 15 }
];

const grid = document.getElementById("weatherGrid");
const search = document.getElementById("search");

function getIcon(condition) {
  if (condition === "Sunny") return "fa-sun";
  if (condition === "Rainy") return "fa-cloud-rain";
  return "fa-cloud";
}

function render(data) {
  grid.innerHTML = "";

  data.forEach(d => {
    const card = document.createElement("div");
    card.className = "card";

    const tempClass = d.temp >= 30 ? "hot" : "cool";

    card.innerHTML = `
      <i class="fas ${getIcon(d.condition)}"></i>
      <h2>${d.name}</h2>
      <p class="temp ${tempClass}">${d.temp}°C</p>
      <p>${d.condition}</p>
      <div class="details">
        <span>💧 ${d.humidity}%</span>
        <span>🌬 ${d.wind} km/h</span>
      </div>
    `;

    grid.appendChild(card);
  });
}

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();
  const filtered = districts.filter(d =>
    d.name.toLowerCase().includes(value)
  );
  render(filtered);
});

render(districts);
