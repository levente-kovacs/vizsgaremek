const express = require('express');
const config = require('config');
const logger = require('./config/logger');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
// const cors = require('cors');
const cors = require('./config/cors');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Authenctication.
const authenticateJwt = require('./auth/authenticate');
// const adminOnly = require('./auth/adminOnly');
const authHandler = require('./auth/authHandler');

const swaggerDocument = YAML.load('./docs/swagger.yaml');

// mongodb+srv://vizsgaremek:vizsgaremek@cluster0.vq3ma.mongodb.net/vizsgaremek?retryWrites=true&w=majority
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmI0ZDc5YzFhOTM2YjlhZmY2MjNhMWIiLCJlbWFpbCI6Im1hZ3lhci5tQGdtYWlsLmNvbSIsInJvbGUiOjEsImlhdCI6MTY1NjMxNTMxOSwiZXhwIjoxNjU2MzE4OTE5fQ.X5EcB3uSWAiY5bdCE4U1cKhmrbOihh1Nsha9AjQWiAo
// $2a$10$Vtn9njBQVjBBNreU2TJNveCz0BuMzubgEHhh1SWyTLCv.rxI2RewK

const { host, user, pass } = config.get('database');
mongoose.connect(`mongodb+srv://${host}`, {
    user,
    pass,
}).then(conn => console.log('Connection success!'))
    .catch(err => {
        throw new Error(err.message);
    });


app.use(cors());
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.static('public'));
app.use(bodyParser.json());

// Router.
// app.use('/login', require('./controller/login/router'));
app.post('/login', authHandler.login);
app.post('/refresh', authHandler.refresh);
app.post('/logout', authHandler.logout);

// app.use('/calorie-chart', require('./controller/calorie-chart/router'));
app.use('/calorie-chart', require('./controllers/calorie-chart/router'));
app.use('/sport-supplement',  require('./controllers/sport-supplement/router'));
app.use('/workout-type',  require('./controllers/workout-type/router'));
app.use('/workout-exercise',  require('./controllers/workout-exercise/router'));
app.use('/user', authenticateJwt, require('./controllers/user/router'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/', (req, res) => {
    res.send('api server');
});

app.use((err, req, res, next) => {
    res.status = 500;
    res.json({
        hasError: true,
        message: 'Server Error',
    });
});

module.exports = app;
