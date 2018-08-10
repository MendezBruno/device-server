const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
var server = require('http').createServer(app);



app.set('portChat',process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));




server.listen(app.get('portChat'), () => {
	console.log('server on port ', app.get('portChat'));
});