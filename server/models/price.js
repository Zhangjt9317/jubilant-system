const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const priceSchema = new Schema({
    name: String,
    date: String,
    open: Number,
    high: Number,
    low: Number,
    close: Number,
    volume: Number,
})

module.exports = mongoose.model('Price', priceSchema);