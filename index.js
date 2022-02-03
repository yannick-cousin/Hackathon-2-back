const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
require('dotenv').config();

const voyages = require('./src/routes/voyages.js');
const historique = require('./src/routes/historique.js');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/home', voyages);
app.use('/historique', historique);
app.use('/public', express.static('public'));

let server = app.listen(3030, () => {
	console.log('listening on port', server.address().port);
});
