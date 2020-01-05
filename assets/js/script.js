
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
    Weather.getCurrent("Tacoma", function(current) {
        var weatherSelector = document.getElementById('weather');
        var iconSelector = weatherSelector.querySelector('.icon');

        var temp = Math.floor(current.temperature());
        var weatherCond = toTitleCase(current.conditions());
        var icon = getIcon(current.icon());

        var iconRegex = /(^|\s)i-\S+/g;

        weatherSelector.querySelector('.temp').innerHTML = temp;

        if(iconSelector.className.match(iconRegex)){
            iconSelector.className = iconSelector.className.replace(iconRegex, '')
        }
        iconSelector.classList.add(icon.iconClass);

        changeFavicon('images/icons/'+icon.iconName+'.ico');
        weatherSelector.querySelector('.description').innerHTML = weatherCond;

        document.querySelector('title').innerHTML = temp + '° ' + weatherCond;
    });

    setTimeout(displayWeather, 30000);
}

function backgroundImage(){
    var src = bgPluck();

    var img = new Image();
    img.onload = function(){
        if (('naturalHeight' in this &&
            this.naturalHeight + this.naturalWidth === 0) ||
            (this.width + this.height == 0)) {
            this.onerror();
            return;
        }

        document.querySelector('body').style.backgroundImage = 'url('+src.url+')';

        var imgAuthor = '-';
        if(src.hasOwnProperty('author')) {
            imgAuthor = src.author;
        }
        var description = document.getElementById('image-description');

        description.classList.add('hidden');
        setTimeout(function () {
            description.textContent = imgAuthor;
            description.classList.remove('hidden');
        }, 1000);

        setTimeout(backgroundImage, 30000);
    };
    img.onerror = function(err) {
        handleBGErrors(err);
    };

    //img.src = src.url;

    fetch(src.url, {}).then(res => {
        if (res.ok) {
            //img.src = src.url;
            res.blob().then(b => {
                img.src = URL.createObjectURL(b);
            });
        } else {
            handleBGErrors(res.statusText);
        }
    });

}

function handleBGErrors(err){
    console.log('Image Err:', err);
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

    if(Icons.hasOwnProperty(iconID)){
        res = Icons[iconID];
    } else if (Icons.hasOwnProperty(iconCode)) {
        var iconCat = Icons[iconCode];

        if(iconCat.hasOwnProperty('parentCode')){
            iconCat = Icons[iconCat.parentCode];
        }

        if (iconCat.hasOwnProperty(iconID)) {
            var iconIDCat = iconCat[iconID];
            if(iconCat.hasOwnProperty('parentCode')){
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
        }
    }

    return res;
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

document.addEventListener("DOMContentLoaded", function(){
    window.bgPluck = selectBackground(Backgrounds);
    backgroundImage();

    displayTime();

    Weather.apiKey = 'b148c2be8cc81a234345e3f64f5dd14b';
    displayWeather();
});
