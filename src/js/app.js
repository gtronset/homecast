import Variables from './variables.js';
import Icons from './icons.js';
import Weather from './weather.js';
import Backgrounds from './backgrounds';
import Time from './time';

import Utilities from './utilities';
const { toTitleCase } = Utilities;

const BackgroundsList = Backgrounds.getList(Variables.backgrounds);

/* Weather */

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

function displayWeather(){
    Weather.getCurrent(Variables.default_city, updateWeatherInformation);

    setTimeout(displayWeather, Variables.cycle_duration);
}

/* Initialize */

document.addEventListener('DOMContentLoaded', function(){
    Backgrounds.initialize(BackgroundsList, Variables.cycle_duration);

    Time.initialize();

    Weather.apiKey = Variables.weather_api_key;
    displayWeather();
});
