const mongoose = require('mongoose');

const {Schema} = mongoose;

const urlSchema = new Schema({
    code: {type: String, required: true},
    url: {type: String, required: true},
    user: {type: String, required: false},
    hits: {type: Number, required: true, default: 0},
}, {
    timestamps: true,
    collection: 'links',
});

urlSchema.pre('save', async (next) => {
    next();
});

const Url = mongoose.model('URL', urlSchema);

module.exports = Url;