function setPainel() {
    const photos = ["painel2.jpg", "painel1.jpg"]
    const img_url = document.getElementById("painel").style.backgroundImage
    const url = (img_url.split('/')[1])
    console.log(url)
    if (url == `${photos[0]}")`) {
        document.getElementById("painel").style.backgroundImage = `url('public/${photos[1]}')`
    } else {
        document.getElementById("painel").style.backgroundImage = `url('public/${photos[0]}')`
    }

}


