const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Me');
});

const port = 8080;

// app.use('/', require('./routes'));

app.listen(process.env.port || port);
console.log('Web Server is listening at port '+ (process.env.port || port));