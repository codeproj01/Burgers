//Set up dependencies
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');
const routes = require('./controllers/burgers_controllers.js');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.static(__dirname + '../public'));

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use('/', routes);

app.listen(PORT, () => console.log(`Server running on port ${ PORT }`)); 