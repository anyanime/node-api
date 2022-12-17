const mongoose = require('mongoose');
const dotenv =require('dotenv').config();

module.exports = () => {
mongoose.connect(process.env.MONGO_URI,
{
    // dbName: 'rest-api',
    user: process.env.NAME,
    pass: process.env.PASS
})
.then(() => console.log('Connected to database'))
.catch(err => console.log(err.message));

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to database')
});

mongoose.connection.on('error', err => {
    console.log(err.message)
});

mongoose.connection.on('diconnected', () => {
    console.log('Mongooses connection disconnected.....')
});

process.on('SIGINT', () => {
   mongoose.connection.close(() => {
    console.log('Mongoose disconnected due to app termination... ');
    process.exit(0);
   });
});
}

