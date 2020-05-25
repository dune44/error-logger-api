const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const errorSchema = new Schema({
    location: String,
    error: String
 });

module.exports = mongoose.model( 'error', errorSchema );