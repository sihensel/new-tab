// all credit to https://github.com/Jaredk3nt/homepage
// load weather from openweathermap.org
function getWeather() {
    let xhr = new XMLHttpRequest();
    // Request to open weather map
    xhr.open(
        "GET", "http://api.openweathermap.org/data/2.5/weather?id=2832939&units=metric&appid=e5b292ae2f9dae5f29e11499c2d82ece"
    );
    xhr.onload = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let json = JSON.parse(xhr.responseText);
                document.getElementById("temp").innerHTML = json.main.temp.toFixed(0) + String.fromCharCode(176) + "C";
                document.getElementById("weather-description").innerHTML = json.weather[0].description;
            } else {
                console.log("error msg: " + xhr.status);
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
