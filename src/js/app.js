import Variables from './variables';
import Weather from './weather/weather';
import Backgrounds from './backgrounds';
import Time from './time';

const intialize = () => {
    const BackgroundsList = Backgrounds.getList(Variables.backgrounds);

    Backgrounds.initialize(BackgroundsList, Variables.cycle_duration);

    Time.initialize();

    Weather.initialize(Variables.weather_api_key, Variables.default_city);
};

document.addEventListener('DOMContentLoaded', intialize);
