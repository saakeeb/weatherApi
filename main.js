const key = '7b811e6177e64567ed27bc624508e692';
const base = 'https://api.openweathermap.org/data/2.5/weather';

function weatherUI(city) {
    fetch(`${base}?q=${city}&units=metric&appid=${key}`)
    .then(response =>response.json())
    .then(data => updateUI(data))
}


document.getElementById('submitButton').addEventListener('click', ()=>{
    const cityName = document.getElementById('searchCity').value;
    weatherUI(cityName);
    document.getElementById('searchCity').value = '';
})



function updateUI (data){
    document.getElementById('cityResult').innerText = data.name || 'city not found';
    if(data.cod == '404'){
        document.getElementById('cityTemp').innerText = '00';
        document.getElementById('weather').innerText = 'None';
    }
    else{
        document.getElementById('cityTemp').innerText = data.main.temp;
        document.getElementById('weather').innerText = data.weather[0].main;
        document.getElementById('weatherPic').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    }
}