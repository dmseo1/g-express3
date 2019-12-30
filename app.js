var express = require('express');
var app = express();
var path = require('path');
require('dotenv').config();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('html', require('ejs').renderFile);

var indexRouter = require('./router/index');

app.use(express.json());
app.use('/', indexRouter);


var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`서버가 시작되었습니다: http://localhost:${port}`);
});