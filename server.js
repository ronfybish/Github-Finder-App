const express = require('express');
const dotenv=require('dotenv').config()
const path = require('path');
const app = express();

//Middlewere

app.use(express.json({ extended: false }));
app.use(express.urlencoded({extended: false}));

//Import Routes 

const githubRoute=require('./routes/github')
const producthuntRoute=require('./routes/producthunt')


//Routes Middlewere
app.use('/api/github',githubRoute)
app.use('/api/producthunt',producthuntRoute)


if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));