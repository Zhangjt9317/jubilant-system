const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const metricsSchema = new Schema({
    name: String,
    hashrate: Number,
    difficulty: Number,
    active_addresses: Number,
    total_exchange_BTC_inflow: Number,
    total_exchange_BTC_outflow: Number,
    total_miner_outflow: Number,
    nvt: Number,
})

module.exports = mongoose.model('Metrics', metricsSchema);