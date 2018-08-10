const mongoose = require('mongoose');
const  companySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    representative: {
        type: String,
        required: true
    },
    contactNo: {
        type: String
    },
    note: {
        type: String
    },
    // prescriptions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'prescription' }]
});

const  company = mongoose.model('company', companySchema);

module.exports = company;