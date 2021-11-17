const path = require('path');
//const bodyParser = require('body-parser');

const express = require('express');
//const mountRoutes = require('./routes')

const app = express();
//mountRoutes(app)

require('dotenv').config()

//auth w/ passport, express-session, express-mysql-session, etc attempt
const session = require("express-session");
//express-session allows you to create session middleware
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy
const MySQLStore = require('express-mysql-session')(session);
/*
    express-mysql-session initially creates a sessions table
    if necessary, then manages sessions using your mysql db instance
*/
const { pool } = require("../models/database.js")
    /* 
        import pool credentials from database.js to allow MySQLStore to connect
        to db instance
    */

const connection = pool.promise()
const sessionStore = new MySQLStore({}, connection);

//express-sesison session options below
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))
app.use(passport.initialize());
app.use(passport.session());


app.use(express.urlencoded({ extended: true }));

const adminRoutes = require('./routes/admin');
const lotRoutes = require('./routes/lot');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', 'views');

/* app.locals.modelYearRange = function(startYear) {
        var currentYear = new Date().getFullYear(), years = [];
        startYear = startYear || 1980;
        while ( startYear  <= currentYear ) {
            years.push(startYear++);
        }
        return years;
    }; */

//app.locals.makesArray = require("./data/makes.js");

app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoutes);
app.use(lotRoutes);
app.use(authRoutes);
app.use(userRoutes);


app.use((req, res, next) => {
    res.status(404).render(
        './404', {
            pageTitle: '404 Page',
            pageName: 'not_found',
        }
    )
})

/* app.use((req, res, next) => {
    console.log('This is a console test');
    res.send('<h1>Hello from express</h1>')
}) */

app.listen(3001);