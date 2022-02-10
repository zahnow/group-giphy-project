const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryString = 'SELECT * FROM "favorites";';
  pool.query(queryString)
    .then(response => {
      res.send(response.rows);
    })
    .catch(error => {
      console.warn(error);
      res.sendStatus(500);
    })
});

// add a new favorite
router.post('/', (req, res) => {
  const queryString = `INSERT INTO "favorites" ("name", "path") VALUES ($1, $2);`;
  pool.query(queryString, [req.body.name, req.body.path])
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.warn(error);
      res.sendStatus(500);
    })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  // req.body should also contain an "action" set to either "ADD" or "REMOVE", this will determine if you're adding or removing the favorite.

  let queryString = `INSERT INTO "favorites_category" ("favorites_id", "category_id") VALUES ($1, $2);`;
  if (req.body.action === "REMOVE") {
    console.log('in remove action');
    queryString = `DELETE FROM "favorites_category" WHERE "favorites_id"=$1 AND "category_id"=$2;`;
  }

  pool.query(queryString, [req.params.favId, req.body.category_id])
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.warn(error);
      res.sendStatus(500);
    })
});

// delete a favorite
router.delete('/:id', (req, res) => {
  const queryString = `DELETE FROM "favorites" WHERE "id"=$1`;
  pool.query(queryString, [req.params.id])
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.warn(error);
      res.sendStatus(500);
    })
});

module.exports = router;
