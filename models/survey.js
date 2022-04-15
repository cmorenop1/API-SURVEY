let mongoose = require('mongoose');
const question = require('./question').schema;

let surveyModel = mongoose.Schema(
    {
        title: String,
        type: String,
        status: String,
        startDate: String,
        endDate: String,
        questions: [question]

    },

    {
        collection: "survey"
    }
);

module.exports = mongoose.model('Survey',surveyModel);