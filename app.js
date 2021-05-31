const path = require('path');
const bodyParser = require('body-parser');

const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin');
const lotRoutes = require('./routes/lot');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(adminRoutes);
app.use(lotRoutes);

app.use((req, res, next) => {
    console.log('This is a console test');
    res.send('<h1>Hello from express</h1>')
})

app.listen(3000);