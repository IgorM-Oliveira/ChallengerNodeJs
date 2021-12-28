const Shortener = require('../models/shortener.model');
const User = require("../models/user.model");

function generateCode() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i=0; i<5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return 'http://localhost:3000/' + text
}

exports.shortness = async (req, res) => {
    try {
        const links = await Shortener.find();
        return res.send({links})
    } catch (err) {
        return res.status(400).json({message: "Não foi possível realizar está ação!"});
    }
}

exports.shortener = async (req, res) => {
    try {
        const isUrl = await Shortener.find({url: req.body.url});

        if (isUrl.length >= 1) {
            // await updateUrl({isUrl})
            return res
                .status(409)
                .json({message: "Atenção! Este URL já possui registro!"});
        }

        const newShortener = new Shortener({
            url: req.body.url,
            user: req.body.user,
            code: generateCode(),
            hits: 1
        });

        const shortener = await newShortener.save();
        return res
            .status(201)
            .json({
                message: "URL encurtada com sucesso!",
                shortener: shortener.code
            })
        } catch (err) {
        return res.status(400).json({message: "Não foi possível realizar está ação!"});
    }
};

const updateUrl = async (req, res) => {
    try {
        const {email} = req.body;
        const {password} = req.body;
        const user = await User.findByCredentials(email, password);
        if (!user) {
            return res.status(401).json({
                error: "Erro ao Logar! Verifique as suas credenciais de autenticação!",
            });
        }
        const token = await user.generateAuthToken();
        return res
            .status(201)
            .json({message: "Usuário(a) logado com sucesso!", user, token});
    } catch (err) {
        return res.status(400).json({message: "Não foi possível realizar está ação!"});
    }
};
