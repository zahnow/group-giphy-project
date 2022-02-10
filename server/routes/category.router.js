const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  // return all categories
  const queryText = `SELECT * FROM category ORDER BY name ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

router.post('/', (req,res) => {
  console.log(req.body.name);
  const category = req.body.name;
  const queryText = `INSERT INTO "category" ("name") VALUES ($1);`;
  pool.query(queryText, [category])
  .then((response) => {
    console.log('POSTED to categories', response);
    res.sendStatus(200);
  }).catch((error) => {
    console.log('error POSTING to categories', error)
    res.sendStatus(500);
  })
})

router.delete('/:id', (req,res) => {
  const id = req.params.id;
  const queryText = `DELETE FROM "category" WHERE id=$1;`;
  pool.query(queryText, [id]).then((response) => {
    console.log('DELETED from category', response);
    res.sendStatus(200);
  }).catch((error) => {
    console.log('error DELETING from category', error);
    res.sendStatus(500);
  })
})

router.put('/:id', (req,res) => {
  const newName = req.body.newName;
  const id = req.params.id;
  const queryText = `UPDATE "category" SET "name"=$1 WHERE "id"=$2;`;
  pool.query(queryText, [newName, id]).then((response) => {
    console.log('UPDATED category name', response);
    res.sendStatus(200);
  }).catch((error) => {
    console.log('error UPDATING category name', error);
    res.sendStatus(500);
  })
})

module.exports = router;
