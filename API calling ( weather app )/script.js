
const button =  document.getElementById("search-button");
const input = document.getElementById("city-input");
const cityName = document.getElementById('city-name');
const cityTime= document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp')

async function getData(cityName){
const promise = await fetch(
`http://api.weatherapi.com/v1/current.json?key=519f453b5f2a40918e6152318242901&q=${cityName}&aqi=yes`
);
return await promise.json()
};


button.addEventListener("click",async ()=>{
const city = input.value;
const result = await getData(city);
console.log("Raw Result: ",result);
cityName.innerText = `${result.location.name}, ${result.location.region}`;
    cityTime.innerText = result. location. localtime;
    cityTemp.innerText = result.current.temp_c;
})
































































