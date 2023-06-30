const express = require('express');
const router = express.Router();
const db = require('../db'); 



router.post('/', (req, res) => {
  let sql = 'INSERT INTO Tutors SET ?';
  let tutor = req.body;
  db.query(sql, tutor, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});


router.get('/:PhoneNumber', (req, res) => {
  let sql = `SELECT * FROM Tutors WHERE PhoneNumber = ?`;
  db.query(sql, [req.params.PhoneNumber], (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});



router.put('/:PhoneNumber', (req, res) => {
  let sql = `UPDATE Tutors SET PhoneNumber = ? WHERE PhoneNumber = ?`;
  db.query(sql, [req.body.PhoneNumber, req.params.PhoneNumber], (err, result) => {
      if (err) {
          res.status(500).send({ error: 'An error occurred in the database operation' });
          throw err;
      }

      res.json({affectedRows: result.affectedRows, message: 'Update operation complete'});
  });
});





router.delete('/:PhoneNumber', (req, res) => {
  let sql = `DELETE FROM Tutors WHERE PhoneNumber = ?`;
  db.query(sql, [req.params.PhoneNumber], (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});



module.exports = router;
