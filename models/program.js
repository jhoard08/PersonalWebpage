const mongoose = require('mongoose');
const Joi = require('joi');

const Program = mongoose.model('program', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    language: {
        type: String,
        required: true,
    },
    url: {
        type: String
    }
}));

function validateProgram(program){
    const isValid = Joi.object({
        name: Joi.string().required().min(5).max(50),
        language: Joi.string().required()
    })
    return isValid.validate(program);
}

module.exports.Program = Program;
module.exports.validate = validateProgram;