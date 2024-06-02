import Icons from '../icons';
import WeatherClient from './weather-client';

import Utilities from '../utilities';
const { delay, toTitleCase } = Utilities;

/*
    Set time-to-refresh at 5 minutes. Weather data in OWM's system is updated
    no more than one time every 10 minutes
*/

const DEFAULT_CYCLE_DURATION = 300000;

function updateWeatherInformation(current) {
    const weatherSelector = document.getElementById('weather');
    const iconSelector = weatherSelector.querySelector('.icon');

    const temperature = Math.floor(current.temperature());
    const weatherCond = toTitleCase(current.conditions());

    const icon = Icons.getIcon(current.icon());

    const iconRegex = /(^|\s)i-\S+/g;

    weatherSelector.querySelector('.temp').innerHTML = temperature;

    if (iconSelector.className.match(iconRegex)) {
        iconSelector.className = iconSelector.className.replace(iconRegex, '');
    }
    iconSelector.classList.add(icon.iconClass);

    Icons.changeFavicon(`images/icons/${icon.iconName}.ico`);

    weatherSelector.querySelector('.description').innerHTML = weatherCond;

    document.querySelector('title').innerHTML = `${temperature}° ${weatherCond}`;
}

function displayWeather(city, cycle_duration = DEFAULT_CYCLE_DURATION) {
    WeatherClient.getCurrent(city, updateWeatherInformation);

    delay(cycle_duration).then(() => displayWeather(city, cycle_duration));
}

const weather = {
    initialize: function (weather_api_key, city) {
        WeatherClient.apiKey = weather_api_key;

        displayWeather(city);
    },
};

export default weather;
