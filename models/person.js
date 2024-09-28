const { default: mongoose } = require("mongoose");

// define the person schema
const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
    },
    work:{
        type: String,
        enum: ["chef", "waiter", "coorporate"],
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }
}) 
const Person = mongoose.model('person', personSchema);
module.exports  = Person;
