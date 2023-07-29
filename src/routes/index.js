module.exports = (application) => {
    application.get('/', (req, res) => {
        require('../controllers/index').home(application, req, res);
    });
    application.get('/acessorios', (req, res) => {
        require('../controllers/index').acessories(application, req, res);
    });
    application.get('/brinquedos', (req, res) => {
        require('../controllers/index').brinquedos(application, req, res);
    });
    application.get('/camas', (req, res) => {
        require('../controllers/index').camas(application, req, res);
    });
    application.get('/contato', (req, res) => {
        require('../controllers/index').contato(application, req, res);
    });
    application.get('/product/:id', (req, res) => {
        require('../controllers/index').productPage(application, req, res);
    });
}