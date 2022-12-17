const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ProduceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const Product = mongoose.model('product', ProduceSchema)

module.exports = Product;