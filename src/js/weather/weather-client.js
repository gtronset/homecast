var WeatherClient = {
    Utils: {},
    apiKey: '',
};

WeatherClient.VERSION = '0.0.4';

var jsonp = (WeatherClient.Utils.jsonp = function (uri) {
    return new Promise(function (resolve, reject) {
        var id = '_' + Math.round(10000 * Math.random());
        var callbackName = 'jsonp_callback_' + id;
        var el =
            document.getElementsByTagName('head')[0] ||
            document.body ||
            document.documentElement;
        var script = document.createElement('script');
        var src = uri + '&callback=' + callbackName;

        window[callbackName] = function (data) {
            delete window[callbackName];
            var ele = document.getElementById(id);
            ele.parentNode.removeChild(ele);
            resolve(data);
        };

        script.src = src;
        script.id = id;
        script.addEventListener('error', reject);
        el.appendChild(script);
    });
});

WeatherClient.kelvinToFahrenheit = function (value) {
    return this.kelvinToCelsius(value) * 1.8 + 32;
};

WeatherClient.kelvinToCelsius = function (value) {
    return value - 273.15;
};

WeatherClient.getCurrent = function (city, callback) {
    var url =
        'http://api.openweathermap.org/data/2.5/weather?q=' +
        encodeURIComponent(city) +
        '&units=imperial&&APPID=' +
        WeatherClient.apiKey;

    return this._getJSON(url, function (data) {
        callback(new WeatherClient.Current(data));
    });
};

WeatherClient.getForecast = function (city, callback) {
    var url =
        'http://openweathermap.org/data/2.1/forecast/city?q=' +
        encodeURIComponent(city) +
        '&cnt=1';

    return this._getJSON(url, function (data) {
        callback(new WeatherClient.Forecast(data));
    });
};

WeatherClient._getJSON = function (url, callback) {
    jsonp(url).then(callback);
};

var maxBy = (WeatherClient.Utils.maxBy = function (list, iterator) {
    var max;
    var f = function (memo, d) {
        var val = iterator(d);

        if (memo === null || val > max) {
            max = val;
            memo = d;
        }

        return memo;
    };

    return list.reduce(f, null);
});

var minBy = (WeatherClient.Utils.minBy = function (list, iterator) {
    var min;
    var f = function (memo, d) {
        var val = iterator(d);

        if (memo === null || val < min) {
            min = val;
            memo = d;
        }

        return memo;
    };

    return list.reduce(f, null);
});

var isOnDate = (WeatherClient.Utils.isOnDate = function (a, b) {
    var sameYear = a.getYear() === b.getYear();
    var sameMonth = a.getMonth() === b.getMonth();
    var sameDate = a.getDate() === b.getDate();

    return sameYear && sameMonth && sameDate;
});

WeatherClient.Forecast = function (data) {
    this.data = data;
};

WeatherClient.Forecast.prototype.startAt = function () {
    return new Date(
        minBy(this.data.list, function (d) {
            return d.dt;
        }).dt * 1000
    );
};

WeatherClient.Forecast.prototype.endAt = function () {
    return new Date(
        maxBy(this.data.list, function (d) {
            return d.dt;
        }).dt * 1000
    );
};

WeatherClient.Forecast.prototype.day = function (date) {
    return new WeatherClient.Forecast(this._filter(date));
};

WeatherClient.Forecast.prototype.low = function () {
    if (this.data.list.length === 0) return;

    var output = minBy(this.data.list, function (item) {
        return item.main.temp_min;
    });

    return output.main.temp_min;
};

WeatherClient.Forecast.prototype.high = function () {
    if (this.data.list.length === 0) return;

    var output = maxBy(this.data.list, function (item) {
        return item.main.temp_max;
    });

    return output.main.temp_max;
};

WeatherClient.Forecast.prototype._filter = function (date) {
    return {
        list: this.data.list.filter(function (range) {
            var dateTimestamp = range.dt * 1000;

            if (isOnDate(new Date(dateTimestamp), date)) {
                return range;
            }
        }),
    };
};

WeatherClient.Current = function (data) {
    //console.log(data)
    this.data = data;
};

WeatherClient.Current.prototype.temperature = function () {
    return this.data.main.temp;
};

WeatherClient.Current.prototype.conditions = function () {
    return this.data.weather[0].description;
};

WeatherClient.Current.prototype.icon = function () {
    return {
        code: this.data.weather[0].icon,
        id: this.data.weather[0].id,
    };
};

export default WeatherClient;
