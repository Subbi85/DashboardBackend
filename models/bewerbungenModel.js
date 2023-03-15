const mongoose = require("mongoose");

const bewerbungenSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    company:{
        type: String,
        required: true
    },
    contact:{
        type: String,
    },
    status:{
        type: String,
        required: true
    },
    link:{
        type: String
    }
    
}, {timestamps: true})

module.exports = mongoose.model("BewerbungModel", bewerbungenSchema);