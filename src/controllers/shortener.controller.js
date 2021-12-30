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

exports.short_single = async (req, res) => {
    try {
        const links = await Shortener.findById(req.params.shortnessId).populate('user');
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
            try {
                return res.send(isUrl[0])
            } catch (err) {
                return res
                    .status(400)
                    .json({message: "Não foi possível realizar está ação!"});
            }
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
}

exports.short_update = async (req, res) => {
    try {
        const newShortener = {
            url: req.body.url,
            user: req.userId,
            code: generateCode(),
            hits: req.body.hits + 1
        }

        console.log(newShortener);

        const shortener = await Shortener.findByIdAndUpdate(req.body._id, newShortener, { new: true })

        console.log(shortener);

        return res.send({ shortener })
    } catch (err) {
        return res
            .status(400)
            .json({message: "Não foi possível realizar está ação!"});
    }
}
