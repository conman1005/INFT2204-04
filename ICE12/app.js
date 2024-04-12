const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose')(session);
const passport = require('passport');
const pug = require('pug');
const user = require('./routes/user.route');
require('dotenv').config();
require('./config/passport')

const routes = require('./routes/user.route')

// initialize method
const app = express();
// use port from env or default to 3000 if not set
const PORT = process.env.PORT || 3000;
const MONGO_STRING = process.env.DB_STRING;

mongoose.connect(MONGO_STRING).then(console.log(`MongoDB Conneted ${MONGO_STRING}`)).catch((err) => console.log(err));

app.use(express.urlencoded({extended: false}));

// Express Session
app.use(
    session({
        secret: "secret",
        resave: false,
        saveUnititialized: true,
        store: new MongoStore.create({mongoURL: MONGO_STRING, mongooseConnection: mongoose.connection})
    })
)

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// configure routes
app.use('/', user);

// setup template engine
app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");


// Listent on port
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})