const Shortener = require('../models/shortener.model');

function generateCode() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghilkmnopqrstuvwxyz0123456789';

    for (let i=0; i<5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return 'http://localhost:3000/' + text
}

exports.shortlist = async (req, res) => {
    try {
        const links = await Shortener.find({user: req.userId}).populate('user');
        return res.send({links})
    } catch (err) {
        return res.status(400).json({message: "Não foi possível realizar está ação!"});
    }
}

exports.short_delete = async (req, res) => {
    try {
        const links = await Shortener.findByIdAndRemove(req.params.shortnessId);
        return res.send({links})
    } catch (err) {
        return res.status(400).json({message: "Não foi possível realizar está ação!"});
    }
}

exports.short_register = async (req, res) => {
    try {
        const isUrl = await Shortener.find({url: req.body.url});

        if (isUrl.length >= 1) {
            return res
                .status(409)
                .json({message: "Atenção! Este URL já possui registro!"});
        }

        const newShortener = new Shortener({
            url: req.body.url,
            user: req.userId,
            code: generateCode(),
            hits: 1
        });

        const shortener = await Shortener.create(newShortener);
        return res.send({ shortener })
    } catch (err) {
        return res
            .status(400)
            .json({message: "Não foi possível realizar está ação!"});
    }
};

/*const updateUrl = async (req, res) => {
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
};*/
