function setPainel() {
    const photos = ["painel2.jpg", "painel1.jpg"]
    const img_url = document.getElementById("painel").style.backgroundImage
    const url = (img_url.split('/')[2])
    if (url == `${photos[0]}")`) {
        document.getElementById("painel").style.backgroundImage = `url('/images/${photos[1]}')`
    } else {
        document.getElementById("painel").style.backgroundImage = `url('/images/${photos[0]}')`
    }

}


