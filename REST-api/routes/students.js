const express = require('express');
const router = express.Router();
const db = require('../db'); 



router.post('/', (req, res) => {
  let sql = 'INSERT INTO Students SET ?';
  let student = req.body;
  db.query(sql, student, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});


router.get('/:PhoneNumber', (req, res) => {
  let sql = `SELECT * FROM Students WHERE PhoneNumber = ?`;
  db.query(sql, [req.params.PhoneNumber], (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});



router.put('/:PhoneNumber', (req, res) => {
  let sql = `UPDATE Students SET PhoneNumber = ? WHERE PhoneNumber = ?`;
  db.query(sql, [req.body.PhoneNumber, req.params.PhoneNumber], (err, result) => {
      if (err) {
          res.status(500).send({ error: 'Error' });
          throw err;
      }

      res.json({affectedRows: result.affectedRows, message: 'Updated'});
  });
});





router.delete('/:PhoneNumber', (req, res) => {
  let sql = `DELETE FROM Students WHERE PhoneNumber = ?`;
  db.query(sql, [req.params.PhoneNumber], (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});



module.exports = router;
