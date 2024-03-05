require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes')

app.set('view engine', 'ejs');
app.use(express.json());
app.use(routes);
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})