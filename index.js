
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature", {method:"GET"})
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.body.style.backgroundImage = `url(${data.urls.full})`
        document.getElementById("author").textContent = `By: ${data.user.name}`
    })

