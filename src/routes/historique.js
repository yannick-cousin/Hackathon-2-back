const express = require('express');
// const { send } = require("express/lib/response");
const connection = require('../helper/db.js');
const Router = express.Router();

Router.get('/historique', (req, res) => {
	const sql =
		'SELECT * FROM historiques';

	connection.query(sql, (err, result) => {
		if (err) throw err;
		return res.status(200).json(result);
	});
	console.log('GET on /voyages/');
})

Router.post('/historique', (req, res) => {
    const sql = 'INSERT INTO historiques (date, destination, cout) VALUES (?, ?, ?)'
    const values = [req.body.date, req.body.destination, req.body.cout];

    connection.query(sql, values,(err, result) => {
        if (err) {
          console.error(err);
          res.sendStatus(404);
        } else {
            const id = result.insertId;
            const createdReservation = { id, date, destination, cout };
          res.status(201).json(createdReservation);
        }
      }
    );
  });

  module.exports = Router;