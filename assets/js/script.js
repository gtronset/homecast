
function displayTime() {
    var time = moment().format('h:mm a');
    $('#clock').html(time);
    setTimeout(displayTime, 500);
}

function displayWeather(){
    Weather.getCurrent( "Tacoma", function( current ) {
        var $weather = $("#weather");
        var $icon = $weather.find('.icon');

        var temp = Math.floor(current.temperature()),
            weatherCond = toTitleCase(current.conditions()),
            icon = getIcon(current.icon());

        //console.log(icon);

        $weather.find('.temp').html(temp);

        $icon.removeClass (function (index, css) {
            return (css.match (/(^|\s)i-\S+/g) || []).join(' ');
        });
        $icon.addClass(icon.iconClass);

        changeFavicon('images/icons/'+icon.iconName+'.ico');
        $weather.find('.description').html(weatherCond);

        $('title').html(temp + '° ' + weatherCond)
    });

    setTimeout(displayWeather, 30000);
}

function backgroundImage(){
    var src = bgPluck();

    var img = new Image();
    img.onload = function(){
        if ('naturalHeight' in this) {
            if (this.naturalHeight + this.naturalWidth === 0) {
                this.onerror();
                return;
            }
        } else if (this.width + this.height == 0) {
            this.onerror();
            return;
        }

        $('body').css('backgroundImage', 'url('+src.url+')');

        var imgAuthor = '-';
        if(_.has(src, 'author')) {
            imgAuthor = src.author;
        }
        $('#image-description').animate({'opacity': 0}, 1000, function () {
            $(this).text(imgAuthor)
        }).animate({'opacity': 1}, 1000);

        setTimeout(backgroundImage, 30000);
    };
    img.onerror = function(err) {
        console.log('Image Err:', err);
        setTimeout(backgroundImage, 5000);
    };

    img.src = src.url;

}

function changeFavicon(src) {
    $('link[rel="shortcut icon"]').attr('href', src)
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

    if(_.has(Icons, iconID)){
        res = Icons[iconID];
    } else if (_.has(Icons, iconCode)) {
        var iconCat = Icons[iconCode];

        if(_.has(iconCat, 'parentCode')){
            iconCat = Icons[iconCat.parentCode];
        }

        if (_.has(iconCat, iconID)) {
            var iconIDCat = iconCat[iconID];
            if(_.has(iconIDCat, 'parentCode')){
                iconIDCat = iconCat[iconIDCat.parentCode];
            }
            res = iconIDCat;
        } else if (_.includes(iconCat.altCodes, iconCode)) {
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

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

$(document).ready(function() {
    window.bgPluck = selectBackground(Backgrounds);
    backgroundImage();

    displayTime();

    Weather.apiKey = 'b148c2be8cc81a234345e3f64f5dd14b';
    displayWeather();

});
