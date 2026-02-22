const api = "9c68bdfcebfc77dd0724ecf549e6c250";
const cityInput = document.querySelector("#cityInput");
const searchBtn = document.querySelector("#searchBtn");

const cityName=document.querySelector("#cityName");
const temp=document.querySelector("#temp");
const con=document.querySelector("#con");

async function fetchdata() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${api}&units=metric`);

        if (!response.ok) {
            throw new Error("Could not find the city");
        }

        const data = await response.json();
        cityName.innerHTML = data.name;
        temp.innerHTML = `Temperature: ${Math.round(data.main.temp)}°C`;
        con.innerHTML = data.weather[0].description;

    }

    catch (error) {
        alert(error.message);
    }
}

searchBtn.addEventListener("click",()=>{
    fetchdata(cityInput.value);
});

//Allowing "Enter" to proceed
cityInput.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        fetchdata(cityInput.value);
    }
});