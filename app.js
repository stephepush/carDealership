const path = require('path');
//const bodyParser = require('body-parser');

const express = require('express');
//const mountRoutes = require('./routes')

const app = express();
//mountRoutes(app)

app.use(express.urlencoded({ extended: true }));

const adminRoutes = require('./routes/admin');
const lotRoutes = require('./routes/lot');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.locals.modelYearRange = function(startYear) {
        var currentYear = new Date().getFullYear(), years = [];
        startYear = startYear || 1980;
        while ( startYear  <= currentYear ) {
            years.push(startYear++);
        }
        return years;
    };

console.log(app.locals.modelYearRange(1901))

app.use('/admin', adminRoutes);
app.use(lotRoutes);

app.use((req, res, next) => {
    res.status(404).render(
            './404', 
            { pageTitle: '404 Page' }
        )
})

/* app.use((req, res, next) => {
    console.log('This is a console test');
    res.send('<h1>Hello from express</h1>')
}) */

app.listen(3001);

