const mongoose = require('mongoose');
const Joi = require('joi');

const Project = mongoose.model('program', new mongoose.Schema({
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

function validateProject(project) {
    const isValid = Joi.object({
        name: Joi.string().required().min(5).max(50),
        language: Joi.string().required()
    });
    return isValid.validate(project);
}

module.exports.Project = Project;
module.exports.validate = validateProject;