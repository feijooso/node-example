const express = require('express');
const app = express();
const path = require('path');

//settings
app.set('port', 3000);
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));


//routes
app.use(require('./routes'));

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port')); 
});