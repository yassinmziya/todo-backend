const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 
const cors = require('cors');

mongoose.connect('mongodb://localhost/todoapp', {
    useMongoClient: true,
    /* 
    this argument resolves a deprecation warning - see: http://mongoosejs.com/docs/connections.html#use-mongo-client
    */
});

mongoose.connection.once('open', function() {
    console.log('connected to database \'todoapp\'...');
});

mongoose.Promise = global.Promise;

var app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api', require('./routes/api'));

app.use(function(err, req, res, next) {
    console.log('error caught');
    res.status(422).send(
        {
            error: err.message
        }
    );
});

app.listen(process.env.PORT || 3000, function() {
    console.log('listenting to port 3000...');
});