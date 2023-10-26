
const fetch = (...args) =>
    import('node-fetch').then(({default: fetch}) => fetch(...args));

var express = require('express');
var cors = require('cors');

var corsOptions = {
    origin: true
}
var app = express(); 
app.use(cors(corsOptions));


app.get('/country/:country', async function (req, res) {
    const country = req.params.country;
    var response = await sendRequest(country);
    res.send(response);
});

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('listening at http://%s:%s',host,port);
});

async function sendRequest(name) {
    return await fetch('https://restcountries.com/v3.1/name/'+name, {
        method: 'GET'
    })
    .then((response) => response.json());
}


