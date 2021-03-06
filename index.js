
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature", {method:"GET"})
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        document.body.style.backgroundImage = `url(${data.urls.full})`
        document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1446034295857-c39f8844fad4?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDkxMzIwMTI&ixlib=rb-1.2.1&q=85)`
        document.getElementById("author").textContent = `By: Vadim Sherbakov`
    })

fetch("https://api.coingecko.com/api/v3/coins/dogecoin", {method:"GET"})
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        document.getElementById("crypto-top").innerHTML = `
            <img src="${data.image.small}">
            <p>${data.name}</p>
        `
        document.getElementById("crypto").innerHTML += `
            <p>🎯 Current price: $${data.market_data.current_price.usd}</p>
            <p>24-hour high price: $${data.market_data.high_24h.usd}</p>
            <p>24-hour low price: $${data.market_data.low_24h.usd}</p>
        `
    })
    .catch(err => {
        console.error(err)
    })

function doDate(){
    let date = new Date();
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
}
setInterval(doDate, 1000);


navigator.geolocation.getCurrentPosition((position) => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`, {method: "GET"})
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
            <div class="weather-temp">
                <img src=${iconUrl}>
                <p>${Math.round(data.main.temp)}°C</p>
            </div>
                <p id="weather-city">${data.name}</p>
            `
        })
        .catch(err => {console.error(err)})
});









