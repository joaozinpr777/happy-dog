require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3333;

app.use(cors())
app.use(express.json())
app.use(express.static('./src/public'));

app.set('view engine', 'ejs');
app.set('views', './src/views/')
require('./routes/index')(app);

app.listen(PORT)