const express = require('express');
// const { send } = require("express/lib/response");
const connection = require('../helper/db.js');
const Router = express.Router();

Router.get('/home', (req, res) => {
	const sql =
		'SELECT id, name, destination, image, prix, evenement_date, notes FROM voyages';

	connection.query(sql, (err, result) => {
		if (err) throw err;
		if (result.length === 0) {
			res.sendStatus(404);
		  } else {
			res.json(result);
		  }
	});
	console.log('GET on /voyages/home');
});

Router.get('/reservation', (req, res) => {
	const sql = 'SELECT * FROM voyages WHERE id=?';
	const values = [req.body.id];

	connection.query(sql, values, (err, result) => {
		if (err) throw err;
		if (result.length === 0) {
      res.sendStatus(404);
    } else {
      res.json(result);
    }
	});
	console.log('GET on /voyages/reservation');
});

module.exports = Router;