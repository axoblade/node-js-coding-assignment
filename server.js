const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const logger = require('./middleware/logger');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
const cookieParser = require('cookie-parser');


//load the ENV varriables
dotenv.config({ path: './config/config.env' });
//connect database
connectDB();


//include route files
const auth = require('./routes/auth');
const driver = require('./routes/driver');
const passenger = require('./routes/passenger');
const ride = require('./routes/ride');

const app = express();

//json parser
app.use(express.json());
app.use(cookieParser());

//logger for the DEV environment
if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'));
} else {
    app.use(logger);
}

//routes
app.use('/api/v1/auth', auth);
app.use('/api/v1/driver', driver);
app.use('/api/v1/passenger', passenger);
app.use('/api/v1/ride', ride);

app.use(errorHandler);
app.listen();

const PORT = process.env.PORT || 3800;

const server = app.listen(PORT, console.log(`🚀 Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`));

//handle exeptions and fatal errors

process.on('unhandledRejection', (err, promise) => {
    console.log(`❌Error: ${err.message}`);

    //close server and exit
    server.close(() => process.exit(1));
    
});