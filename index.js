const express = require("express");
const dotenv = require('dotenv');
dotenv.config();
const cookieParser = require('cookie-parser');
const expressLayouts = require('express-ejs-layouts')
const app = express();
const PORT = 8000;
const db = require('./config/mongoose');
const sassMiddleware = require('node-sass-middleware');
const path = require('path');    // for using directories

app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'
}));

app.use(express.urlencoded());
app.use(cookieParser());

//extract styles and scripts from sub pages into the layout
app.use(express.static('./assets'));
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//any request that comes in is redirected to the main route handler index.js in the routes directory
app.set('view engine', 'ejs');
app.set('views', './views');


//Use express main router
app.use('/', require('./routes/index'))

app.listen(PORT, function (err) {
    if (err) {
        console.log(`Error : ${err}`); //INTERPOLATION : USING BACKTICKS to include variable in output string
    }
    console.log(`Server is running on PORT : ${PORT}`)
})