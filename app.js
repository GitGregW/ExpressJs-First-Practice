const express = require('express');
const app = express();

// Chrome devtools network requests seeing a /favicon.ico GET. that triggers all app.use() functions.
app.get('/favicon.ico', (req, res) => res.status(204));

app.use('/users', (req, res, next) => {
    console.log("Users Page");
    res.send('<h1>Users Page</h1>');
});

app.use('/', (req, res, next) => {
    console.log("Home Page");
    res.send('<h1>Home Page</h1>');
    next();
});

app.use((req, res, next) => {
    console.log("Home Page; next middleware function");
});

app.listen(3000);