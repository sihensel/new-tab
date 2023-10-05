// all credit to https://github.com/Jaredk3nt/homepage
// load weather from openweathermap.org
function getWeather() {
    let xhr = new XMLHttpRequest();
    xhr.open(
        "GET", "https://wttr.in/Albstadt?format=%C+%c+%t"
    );
    xhr.onload = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                document.getElementById("weather").innerHTML = xhr.responseText;
            } else {
                console.log("error retreiving weather: " + xhr.status);
            }
        }
    };
    xhr.send();
}

function getTime() {
    let date = new Date(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        hour = date.getHours();

    return (
        (hour < 10 ? "0" + hour : hour) +
        ":" +
        (min < 10 ? "0" + min : min) +
        ":" +
        (sec < 10 ? "0" + sec : sec)
    );
}

window.onload = () => {
    getWeather();
    document.getElementById("clock").innerHTML = getTime();
    setInterval(() => {
        document.getElementById("clock").innerHTML = getTime();
    }, 100);
}
