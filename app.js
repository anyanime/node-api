const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
require('./db')();

// app.all('/test', (req, res) => {
//     // console.log(req.query);
//     // res.send(req.query);
//     // console.log(req.params);
//     // res.send(req.params)
//     console.log(req.body);
//     res.send(req.body)
// })

const productRoute = require('./routes/router');
app.use('/products', productRoute);

app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err)
})

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
})
app.listen(PORT, () => console.log(`I am open @ port ${PORT}`));


