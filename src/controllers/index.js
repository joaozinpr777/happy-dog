const { getFromApi } = require("../helpers/utils");

module.exports.home = async (application, req, res) => {

    const camas = await getFromApi('category=CAMAS&limit=4')
    const brinquedos = await getFromApi('category=brinquedo&limit=4')
    const acessorios = await getFromApi('category=acessorios&limit=4')

    res.render('home', { acessorios, camas, brinquedos });
}

module.exports.acessories = (application, req, res) => {
    res.render('secundaryPage', { pageTitle: 'Acessórios' })
}
module.exports.brinquedos = (application, req, res) => {
    res.render('secundaryPage', { pageTitle: 'Brinquedos' })
}
module.exports.camas = (application, req, res) => {
    res.render('secundaryPage', { pageTitle: 'Camas' })
}
module.exports.contato = (application, req, res) => {
    res.render('contato', { pageTitle: 'Contato' })
}
