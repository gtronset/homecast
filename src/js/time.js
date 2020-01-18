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

const time = {
    initialize: displayTime
};

export default time;