const express = require('express');
const router = express.Router();
const db = require('../db'); // Import the database connection



router.get('/:TutorialSubject', (req, res) => {
    let sql = `SELECT * FROM Tutorials WHERE TutorialSubject = ?`;
    db.query(sql, [req.params.TutorialSubject], (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  });

  


router.post('/', (req, res) => {
  let sql = 'INSERT INTO Tutorials SET ?';
  let tutorial = req.body;
  db.query(sql, tutorial, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});





router.put('/:Fee', (req, res) => {
  let sql = `UPDATE Tutorials SET Fee = ? WHERE Fee = ?`;
  db.query(sql, [req.body.Fee, req.params.Fee], (err, result) => {
      if (err) {
          res.status(500).send({ error: 'Error' });
          throw err;
      }

      res.json({affectedRows: result.affectedRows, message: 'Updated'});
  });
});





router.delete('/:ID', (req, res) => {
  let sql = `DELETE FROM Tutorials WHERE ID = ?`;
  db.query(sql, [req.params.ID], (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});



module.exports = router;
