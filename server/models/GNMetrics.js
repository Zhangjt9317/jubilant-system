const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GNmetricsSchema = new Schema({
    t: Number,
    v: Number,
})

const GNModel = mongoose.model('GNMetrics', GNmetricsSchema);
module.exports = GNModel;