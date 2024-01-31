

const button = document.getElementById('get-location');



async function gotLocation(position) {
    console.log(position);
   const result = await getData(position.coords.latitude, position.coords.longitude );
   console.log("weather: ",result);
}

function failedToGet (){
    console.log("error ");
}


button.addEventListener('click', async () => {
    navigator.geolocation.getCurrentPosition (gotLocation,failedToGet);
    })

// weather api-------------------------------------------------------------------


// Async function to fetch weather data using the WeatherAPI
async function getData(lat,lag) {
    // Await the fetch request to the WeatherAPI with the specified city
    // fetch is keyword for calling api and it returns a promise
    const promise = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=519f453b5f2a40918e6152318242901&q=${lat},${lag}&aqi=yes`
    );
    // Await the conversion of the response to JSON format  beacase it also a promise
    return await promise.json();
  }










