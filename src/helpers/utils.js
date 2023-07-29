async function getFromApi(category = '') {
    var myHeaders = new Headers();

    var myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };

    const url = `${process.env.API_URL}?${category}`

    const data = await fetch(url, myInit)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            return json.data
        });

    return data
}

async function getFromApiById(id) {
    var myHeaders = new Headers();

    var myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };

    const url = `${process.env.API_URL}${id}`

    const data = await fetch(url, myInit)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            return json
        });

    return data
}

module.exports = { getFromApi, getFromApiById }