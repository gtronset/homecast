import Icons from './icons';
import WeatherClient from './weather-client';

import Utilities from './utilities';
const { delay, toTitleCase } = Utilities;

function updateWeatherInformation(current){
    const weatherSelector = document.getElementById('weather');
    const iconSelector = weatherSelector.querySelector('.icon');

    const temperature = Math.floor(current.temperature());
    const weatherCond = toTitleCase(current.conditions());

    const icon = Icons.getIcon(current.icon());

    const iconRegex = /(^|\s)i-\S+/g;

    weatherSelector.querySelector('.temp').innerHTML = temperature;

    if(iconSelector.className.match(iconRegex)){
        iconSelector.className = iconSelector.className.replace(iconRegex, '');
    }
    iconSelector.classList.add(icon.iconClass);

    Icons.changeFavicon(`images/icons/${icon.iconName}.ico`);

    weatherSelector.querySelector('.description').innerHTML = weatherCond;

    document.querySelector('title').innerHTML = `${temperature}° ${weatherCond}`;
}

function displayWeather(city, cycle_duration = 30000){
    delay(cycle_duration).then(() => {
        WeatherClient.getCurrent(city, updateWeatherInformation);

        displayWeather(city, cycle_duration);
    });
}

const weather = {
    initialize: function(weather_api_key, city, cycle_duration){
        WeatherClient.apiKey = weather_api_key;

        displayWeather(city, cycle_duration);
    }
};

export default weather;
