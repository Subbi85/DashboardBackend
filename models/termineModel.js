const mongoose = require("mongoose");

const termineSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true
    },
    kategorie: {
        type: String,
        required: true,
        enum: ["geburtstag", "familie", "event","andere"] 
    },
    frequenz: {
        type: String,
        enum: ["einmalig","täglich", "wöchentlich", "monatlich", "jährlich"], 
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model("TerminModel", termineSchema);
