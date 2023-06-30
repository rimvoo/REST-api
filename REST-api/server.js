const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());

// import routes
const studentsRoutes = require('./routes/students');
const tutorsRoutes = require('./routes/tutors');
const tutorialsRoutes = require('./routes/tutorials')
app.use(bodyParser.json());

// use routes
app.use('/students', studentsRoutes);
app.use('/tutors', tutorsRoutes);
app.use('/tutorials', tutorialsRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



