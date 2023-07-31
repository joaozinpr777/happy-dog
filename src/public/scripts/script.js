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


function modal() {
    const modal = document.getElementById('modal')

    modal.style.display = 'flex'
}
function modalOff() {
    const modal = document.getElementById('modal')

    modal.style.display = 'none'
}

function searchOn() {
    const inputText = document.getElementById('search').value
    const url = window.location.href
    window.location.href = `${url}?productName=${inputText}`
}
function searchOff() {
    const url = window.location.href
    const clean = url.split('?')
    window.location.href = clean[0]
}