const User = require('../models/user.model');

exports.userRegistration = async (req, res) => {
    try {
        const isUser = await User.find({email: req.body.email});
        console.log(isUser);
        if (isUser.length >= 1) {
            return res
                .status(409)
                .json({message: "Atenção! Este e-mail já possui registro!"});
        }

        const newUser = new User(req.body);
        const user = await newUser.save();
        const token = await newUser.generateAuthToken();
        return res
            .status(201)
            .json({message: "Usuário(a) criado(a) com sucesso!", user, token});
    } catch (err) {
        return res.status(400).json({err});
    }
};

exports.userLogin = async (req, res) => {
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
        return res.status(400).json({err});
    }
};

exports.userReturn = async (req, res) => {
    await res.json(req.userData);
};