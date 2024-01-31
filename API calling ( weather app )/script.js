// DOM elements
const button = document.getElementById("search-button");
const input = document.getElementById("city-input");
const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');

// Async function to fetch weather data using the WeatherAPI
async function getData(cityName) {
  // Await the fetch request to the WeatherAPI with the specified city
  // fetch is keyword for calling api and it returns a promise
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=519f453b5f2a40918e6152318242901&q=${cityName}&aqi=yes`
  );
  // Await the conversion of the response to JSON format  beacase it also a promise
  return await promise.json();
}

// Event listener for the button click
button.addEventListener("click", async () => {
  // Get the city from the input field
  const city = input.value;
  
  // Call the async function to fetch data for the specified city
  const result = await getData(city);

  // Log the raw result for debugging purposes
  console.log("Raw Result: ", result);

  // Update DOM elements with relevant weather information
  cityName.innerText = `${result.location.name}, ${result.location.region}`;
  cityTime.innerText = result.location.localtime;
  cityTemp.innerText = result.current.temp_c;
});



























































