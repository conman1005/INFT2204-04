/*const http = require('http');
const express = require('express');

var exphb = require('express-handlebars');
const app = express();

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World');
}).listen(3000);*/

const express = require('express');
const pug = require('pug');
var exphb = require('express-handlebars');

// port
const PORT = 3000;

// init app
const app = express();

// setup template engine
app.engine('handlebars', exphb.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', './views');

// set express app.use()
app.use((req, res, next) => {
    console.log(`URL: ${req.url}`);
    req.myName = 'Conner';
    next();
} );

app.get('/', (req, res) => {
    const titleText= 'Home for INFT 2202 Node101 with HandleBars';
    res.render('home', {
        title: titleText
    })
});

// add about route
app.get('/about', (req, res) => {
    const titleText= 'About Page';
    res.render('about', {
        title: titleText
    })
});


app.listen(PORT, () => {
    console.log(`Server Started on Port ${PORT}`);
});