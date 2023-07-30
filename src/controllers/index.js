const { application } = require("express");
const { getFromApi, getFromApiById } = require("../helpers/utils");

module.exports.home = async (application, req, res) => {

    const camas = await getFromApi('category=CAMAS&limit=4')
    const brinquedos = await getFromApi('category=brinquedo&limit=4')
    const acessorios = await getFromApi('category=acessorios&limit=4')

    res.render('home', { acessorios, camas, brinquedos });
}

module.exports.acessories = async (application, req, res) => {
    const acessorios = await getFromApi('category=acessorios&limit=20')
    res.render('secundaryPage', { pageTitle: 'Acessórios', products: acessorios })
}
module.exports.brinquedos = async (application, req, res) => {
    const brinquedos = await getFromApi('category=brinquedo&limit=20')
    res.render('secundaryPage', { pageTitle: 'Brinquedos', products: brinquedos })
}
module.exports.camas = async (application, req, res) => {
    const camas = await getFromApi('category=CAMAS&limit=20')
    res.render('secundaryPage', { pageTitle: 'Camas', products: camas })
}
module.exports.contato = (application, req, res) => {
    res.render('contato', { pageTitle: 'Contato' })
}

module.exports.productPage = async (application, req, res) => {
    const result = await getFromApiById(req.params.id)

    const description = (result.data.description).split(';')

    res.render('productPage', { result: result.data, descriptions: description })
}
