module.exports.home = (application, req, res) => {
    res.render('home');
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
    res.render('contato',{ pageTitle: 'Contato'})
}
