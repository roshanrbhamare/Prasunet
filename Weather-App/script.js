


const apikey="9e4efac8f0a004cb59a374b640c8c889";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search =document.querySelector(".sea input");
const searchbtn =document.querySelector(".sea button");

async function checkWeather(citye){
    const response= await fetch(apiUrl+ citye+ `&appid=${apikey}`)
    var data =await response.json(); 

    console.log(data);
    document.querySelector("#city").innerHTML= data.name;
    document.querySelector("#temp").innerHTML= "Temp is: "+ Math.round(data.main.temp)+"deg";
    document.querySelector("#humidity").innerHTML= "Humidity is: "+ data.main.humidity +"%";
    document.querySelector("#wind-speed").innerHTML= "Wind-Speed is: "+ Math.round(data.wind.speed) +"km/hr";
}

searchbtn.addEventListener("click", (e)=>{
    e.preventDefault();
    checkWeather(search.value);
});
checkWeather("delhi")
