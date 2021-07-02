const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    title: { type: String},
    price: { type: Number},
    qty: { type: Number},
    image: { type: String},
    
})

const Model = mongoose.model("PCSchema",Schema);

module.exports = Model;