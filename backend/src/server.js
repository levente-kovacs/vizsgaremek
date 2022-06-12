const express = require('express');
const config = require('config');
const logger = require('./config/logger');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const cors = require('./config/cors');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Authenctication.
// const authenticateJwt = require('./auth/authenticate');
// const adminOnly = require('./auth/adminOnly');
// const authHandler = require('./auth/authHandler');

// const swaggerDocument = YAML.load('./docs/swager.yaml');

// const { host } = config.get('database');
// mongodb+srv://vizsgaremek:vizsgaremek@cluster0.vq3ma.mongodb.net/vizsgaremek?retryWrites=true&w=majority
mongoose
    .connect(`mongodb+srv://vizsgaremek:vizsgaremek@cluster0.vq3ma.mongodb.net/vizsgaremek?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then( () => {
        // Data seeds.
        // require('./data/seeder');
        logger.info('MongoDB connection has been established successfully.');
    })
    .catch( err => {
        logger.error(err);
        process.exit();
    });

app.use(cors());
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.static('public'));
app.use(bodyParser.json());

// Router.
// app.post('/login', authHandler.login);
// app.post('/refresh', authHandler.refresh);
// app.post('/logout', authHandler.logout);

// app.use('/bills', require('./controllers/bill/routes'));
// app.use('/orders', require('./controllers/order/routes'));
// app.use('/products', require('./controllers/product/routes'));
// app.use('/customers', require('./controllers/customer/routes'));
// app.use('/users', require('./controllers/user/routes'));
app.use('/calorie-chart', require('./controllers/calorie-chart/routes'));
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use( (err, req, res, next) => {
    res.status(err.statusCode);
    res.json({
        hasError: true,
        message: err.message
    });
});

module.exports = app;
