import Variables from './variables.js';
import Icons from './icons.js';
import Weather from './weather.js';
import Utilities from './utilities';

import DefaultBackgrounds from './default-backgrounds.js';
import CustomBackgrounds from './custom-backgrounds.js';

const is_file_protocol = window.location.protocol === 'file:';

function _getBackgrounds(backgrounds_setting){
    switch (backgrounds_setting){
    case 'custom-backgrounds': 
        return CustomBackgrounds;

    default:
        return DefaultBackgrounds;
    }
}

const BackgroundsList = _getBackgrounds(Variables.backgrounds);

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
    const weatherCond = Utilities.toTitleCase(current.conditions());

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

    if(Utilities.hasProperty(Icons, iconID)){
        res = Icons[iconID];
    } else if (Utilities.hasProperty(Icons, iconCode)) {
        let iconCat = Icons[iconCode];

        if(Utilities.hasProperty(iconCat, 'parentCode')){
            iconCat = Icons[iconCat.parentCode];
        }

        if (Utilities.hasProperty(iconCat, iconID)) {
            let iconIDCat = iconCat[iconID];
            if(Utilities.hasProperty(iconCat, 'parentCode')){
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

/* Background Image */

function updateBackgroundImageInformation(backgroundItem, callback){
    document.querySelector('body').style.backgroundImage = `url(${backgroundItem.url})`;

    var imgAuthor = '-';
    if(Utilities.hasProperty(backgroundItem, 'author')) {
        imgAuthor = backgroundItem.author;
    }
    var description = document.getElementById('image-description');

    description.classList.add('hidden');
    setTimeout(function () {
        description.textContent = imgAuthor;
        description.classList.remove('hidden');
    }, 1000);

    callback();
}

function setBackgroundImage(backgroundList){
    const backgroundItem = selectBackgroundItem(backgroundList);

    const filteredList = filterBackgroundList(backgroundList, backgroundItem);
    const updatedBackgroundList = coalesceBackgroundList(BackgroundsList, filteredList);

    return new Promise((resolve, reject) => {

        var img = new Image();
        img.addEventListener('load', function(){
            if (('naturalHeight' in this &&
                this.naturalHeight + this.naturalWidth === 0) ||
                (this.width + this.height == 0)) {
                this.onerror(this);
                return;
            }

            URL.revokeObjectURL(this.backgroundItem);

            updateBackgroundImageInformation(backgroundItem, () => resolve(updatedBackgroundList));
        });
        img.addEventListener('error', reject);

        if(is_file_protocol){
            img.src = backgroundItem.url;
        } else { 
            fetch(backgroundItem.url, {mode: 'no-cors'}).then(res => {
                if (res.ok) {
                    res.blob().then(b => {
                        img.src = URL.createObjectURL(b);
                    });
                } else {
                    reject(updatedBackgroundList);
                }
            }).catch(() => reject(updatedBackgroundList));
        }
    });

}

function backgroundImage(backgroundList){
    setBackgroundImage(backgroundList).then((updatedBackgroundList) => 
        Utilities.delay(Variables.cycle_duration).then(() => backgroundImage(updatedBackgroundList))
    ).catch((updatedBackgroundList) =>
        Utilities.delay(3000).then(() => backgroundImage(updatedBackgroundList))
    );
}

function filterBackgroundList(backgroundList, backgroundItem){
    return backgroundList.filter(item => item !== backgroundItem);
}

function coalesceBackgroundList(originalList, backgroundList = []){
    let list = backgroundList;

    if(backgroundList.length < 1){
        list = originalList.slice(0);
    }
    
    return list;
}

function selectBackgroundItem(backgroundList, random = Math.random()) {
    const index = Math.floor(random * backgroundList.length);
    const item = backgroundList[index];
        
    return item;
}

/* Initialize */

document.addEventListener('DOMContentLoaded', function(){
    backgroundImage(BackgroundsList);

    displayTime();

    Weather.apiKey = Variables.weather_api_key;
    displayWeather();
});
