import Variables from './variables.js';
import Icons from './icons.js';
import Weather from './weather.js';
import DefaultBackgrounds from './default-backgrounds.js';
import CustomBackgrounds from './custom-backgrounds.js';


function _getBackgrounds(backgrounds_setting){
    switch (backgrounds_setting){
    case 'custom-backgrounds': 
        return CustomBackgrounds;

    default:
        return DefaultBackgrounds;
    }
}

const Backgrounds = _getBackgrounds(Variables.backgrounds);

function displayTime() {
    var date = new Date;
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;

    var strTime = hours + ':' + minutes + ' ' + ampm;

    document.getElementById('clock').innerHTML = strTime;
    setTimeout(displayTime, 500);
}

function displayWeather(){
    Weather.getCurrent(Variables.default_city, function(current) {
        var weatherSelector = document.getElementById('weather');
        var iconSelector = weatherSelector.querySelector('.icon');

        var temp = Math.floor(current.temperature());
        var weatherCond = toTitleCase(current.conditions());
        var icon = getIcon(current.icon());

        var iconRegex = /(^|\s)i-\S+/g;

        weatherSelector.querySelector('.temp').innerHTML = temp;

        if(iconSelector.className.match(iconRegex)){
            iconSelector.className = iconSelector.className.replace(iconRegex, '');
        }
        iconSelector.classList.add(icon.iconClass);

        changeFavicon('images/icons/'+icon.iconName+'.ico');
        weatherSelector.querySelector('.description').innerHTML = weatherCond;

        document.querySelector('title').innerHTML = temp + '° ' + weatherCond;
    });

    setTimeout(displayWeather, Variables.cycle_duration);
}

function backgroundImage(){
    var src = window.bgPluck();

    var img = new Image();
    img.onload = function(){
        if (('naturalHeight' in this &&
            this.naturalHeight + this.naturalWidth === 0) ||
            (this.width + this.height == 0)) {
            this.onerror(this);
            return;
        }

        document.querySelector('body').style.backgroundImage = 'url('+src.url+')';

        var imgAuthor = '-';
        if(_hasProperty(src, 'author')) {
            imgAuthor = src.author;
        }
        var description = document.getElementById('image-description');

        description.classList.add('hidden');
        setTimeout(function () {
            description.textContent = imgAuthor;
            description.classList.remove('hidden');
        }, 1000);

        setTimeout(backgroundImage, Variables.cycle_duration);
    };
    img.onerror = function(err) {
        handleBGErrors(err);
    };

    fetch(src.url, {}).then(res => {
        if (res.ok) {
            //img.src = src.url;
            res.blob().then(b => {
                img.src = URL.createObjectURL(b);
            });
        } else {
            handleBGErrors(res.statusText);
        }
    }).catch(err => {
        handleBGErrors(err);
    });

}

function handleBGErrors(err){
    err && console.log(err);
    setTimeout(backgroundImage, 3000);
}

function changeFavicon(src) {
    document.querySelector('link[rel="shortcut icon"]').href = src;
}

function selectBackground(array) {
    var copy = array.slice(0);

    return function() {
        if (copy.length < 1) { copy = array.slice(0); }

        var index = Math.floor(Math.random() * copy.length);
        var item = copy[index];

        copy.splice(index, 1);
        
        return item;
    };
}

function getIcon(iconObj){
    var iconID = 'i'+iconObj.id,
        iconCode = 'i'+iconObj.code,
        res = {};

    if(_hasProperty(Icons, iconID)){
        res = Icons[iconID];
    } else if (_hasProperty(Icons,iconCode)) {
        var iconCat = Icons[iconCode];

        if(_hasProperty(iconCat, 'parentCode')){
            iconCat = Icons[iconCat.parentCode];
        }

        if (_hasProperty(iconCat, iconID)) {
            var iconIDCat = iconCat[iconID];
            if(_hasProperty(iconCat, 'parentCode')){
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
            iconClass: 'i-'+iconObj.code
        };
    }

    return res;
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function _hasProperty(object, property){
    return Object.prototype.hasOwnProperty.call(object, property);
}

document.addEventListener('DOMContentLoaded', function(){
    window.bgPluck = selectBackground(Backgrounds);
    backgroundImage();

    displayTime();

    Weather.apiKey = Variables.weather_api_key;
    displayWeather();
});
