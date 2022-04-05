
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

//http://api.coingecko.com/api/v3/coins

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
    })
    .catch(err => {
        console.error(err)
    })
