const express = require('express');
// const { send } = require("express/lib/response");
const connection = require('../helper/db.js');
const Router = express.Router();

Router.get('/historique', (req, res) => {
	const sql = 'SELECT * FROM historiques';

	connection.query(sql, (err, result) => {
		if (err) throw err;
		return res.status(200).json(result);
	});
	console.log('GET on /historiques/historique');
});

Router.post('/historique', (req, res) => {
	const sql =
		'INSERT INTO historiques (date, destination, cout) VALUES (?, ?, ?)';
	const values = [req.body.date, req.body.destination, req.body.cout];

	connection.query(sql, values, (err, result) => {
		if (err) {
			console.error(err);
			res.sendStatus(404);
		} else {
			res.sendStatus(200);
		}
	});
});

Router.delete('/historique', (req, res) => {
	const sql = 'DELETE FROM historiques WHERE id = ?';
	const values = [req.body.id];

	connection.query(sql, values, (err, result) => {
		if (err) {
			console.log(err);
			res.sendStatus(404);
		} else {
			res.sendStatus(200);
		}
	});
});

module.exports = Router;
