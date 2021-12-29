const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {type: String, maxlength: 100, required: true },
    tel: {type: Number, maxlength: 12, required: false },
    birth: {type: Date, required: false },
    email: {type: String, maxlength: 50, required: true },
    password: {type: String, required: true, select: false },
}, {
    timestamps: true,
    collection: 'users',
});

userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 10);
    }
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;