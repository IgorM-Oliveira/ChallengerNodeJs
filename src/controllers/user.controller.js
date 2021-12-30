const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth.js')

function generateToken (params= {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    })
}

exports.userRegistration = async (req, res) => {
    try {
        const isUser = await User.find({email: req.body.email});

        if (isUser.length >= 1) {
            return res
                .status(409)
                .json({message: "Atenção! Este e-mail já possui registro!"});
        }

        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({ user, token: generateToken({ id: user._id }) });
    } catch (err) {
        return res.status(400).json({err});
    }
};

exports.userAuthenticate = async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email}).select('+password');

    if (!user) {
        return res
            .status(400)
            .json({message: "Usuário(a) não encontrado"});
    }

    if (!await bcrypt.compare(password, user.password)) {
        return res
            .status(400)
            .json({message: "Senha invalida"});
    }

    user.password = undefined;

    res.send({ user, token: generateToken({ id: user._id }) });
};