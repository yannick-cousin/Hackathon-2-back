const express = require('express');
// const { send } = require("express/lib/response");
const connection = require('../helper/db.js');
const Router = express.Router();

Router.get('/', (req, res) => {
	res.send("i am on GET '/bus/'");
});

Router.get('/hall', (req, res) => {
	const sql =
		'SELECT id, constructor, model, price, diesel, gnv, hybride, elec, capacity, image FROM databus';

	connection.query(sql, (err, result) => {
		if (err) throw err;
		return res.status(200).json(result);
	});
	console.log('GET on /Bus/Hall');
});

Router.put('/databus', (req, res) => {
	console.log(req.body.id);

	const sql = 'SELECT * FROM databus WHERE id=?';
	const values = [req.body.id];

	connection.query(sql, values, (err, result) => {
		if (err) throw err;
		return res.status(200).json(result);
	});
	console.log('PUT on /Bus/DataBus');
});

Router.post('/buybus', (req, res) => {
	const sql =
		'INSERT INTO listbus (id_users, doors, argus, etat_int, etat_ext, carburant, consommation, capacity, proprete, mes, controle_tech, kilometrage, climatisation, wifi, panneau_avant, panneau_lateral, panneau_arriere) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
	const values = [
		req.body.id_users,
		req.body.doors,
		req.body.argus,
		req.body.etat_int,
		req.body.etat_ext,
		req.body.carburant,
		req.body.consommation,
		req.body.capacity,
		req.body.proprete,
		req.body.mes,
		req.body.controle_tech,
		req.body.kilometrage,
		req.body.climatisation,
		req.body.wifi,
		req.body.panneau_avant,
		req.body.panneau_lateral,
		req.body.panneau_arriere,
	];

	connection.query(sql, values, (err, result) => {
		if (err) throw err;
		return res.status(200).json(result);
	});
	console.log('PUT on /Bus/DataBus');
});

module.exports = Router;
