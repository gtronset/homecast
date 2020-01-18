import Variables from './variables.js';
import Icons from './icons.js';
import Weather from './weather.js';
import Backgrounds from './backgrounds';

import Utilities from './utilities';
const { hasProperty, toTitleCase } = Utilities;

const BackgroundsList = Backgrounds.getList(Variables.backgrounds);

/* Time/Clock */

function getFormattedTime(date = new Date()) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;

    return `${hours}:${minutes} ${ampm}`;
}

function displayTime(){
    document.getElementById('clock').innerHTML = getFormattedTime();
    setTimeout(displayTime, 500);
}

/* Weather */

function updateWeatherInformation(current){
    const weatherSelector = document.getElementById('weather');
    const iconSelector = weatherSelector.querySelector('.icon');

    const temperature = Math.floor(current.temperature());
    const weatherCond = toTitleCase(current.conditions());

    const icon = getIcon(current.icon());

    const iconRegex = /(^|\s)i-\S+/g;

    weatherSelector.querySelector('.temp').innerHTML = temperature;

    if(iconSelector.className.match(iconRegex)){
        iconSelector.className = iconSelector.className.replace(iconRegex, '');
    }
    iconSelector.classList.add(icon.iconClass);

    changeFavicon(`images/icons/${icon.iconName}.ico`);

    weatherSelector.querySelector('.description').innerHTML = weatherCond;

    document.querySelector('title').innerHTML = `${temperature}° ${weatherCond}`;
}

function displayWeather(){
    Weather.getCurrent(Variables.default_city, updateWeatherInformation);

    setTimeout(displayWeather, Variables.cycle_duration);
}

/* Icon Handling */

function changeFavicon(src) {
    document.querySelector('link[rel="shortcut icon"]').href = src;
}

function getIcon(iconObj){
    const iconID = `i${iconObj.id}`;
    const iconCode = `i${iconObj.code}`;
    
    let res = {};

    if(hasProperty(Icons, iconID)){
        res = Icons[iconID];
    } else if (hasProperty(Icons, iconCode)) {
        let iconCat = Icons[iconCode];

        if(hasProperty(iconCat, 'parentCode')){
            iconCat = Icons[iconCat.parentCode];
        }

        if (hasProperty(iconCat, iconID)) {
            let iconIDCat = iconCat[iconID];
            if(hasProperty(iconCat, 'parentCode')){
                iconIDCat = iconCat[iconIDCat.parentCode];
            }
            res = iconIDCat;
        } else if (iconCat.altCodes.includes(iconCode)) {
            res = iconCat.altIcon;
        } else {
            res = iconCat.defaultIcon;
        }
    } else {
        console.log('Error!', iconObj);
        res = {
            iconName: '44',
            iconClass: `i-${iconObj.code}`
        };
    }

    return res;
}

/* Initialize */

document.addEventListener('DOMContentLoaded', function(){

    Backgrounds.initialize(BackgroundsList, Variables.cycle_duration);

    displayTime();

    Weather.apiKey = Variables.weather_api_key;
    displayWeather();
});
