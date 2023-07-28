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

function getFromApi(category = '') {
    const api_url = document.getElementById('btn_api').value
    var myHeaders = new Headers();

    var myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };

    fetch(`${api_url}${category}`, myInit)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json)
        });
}