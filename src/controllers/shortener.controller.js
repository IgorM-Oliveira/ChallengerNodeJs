// const Shortener = require('../models/shortener.model');

exports.shortener = async (req, res) => {
    try {
        // const newShortener = new Shortener(req.body);
        // const user = await newShortener.save();
        return res
            .status(201)
            .json({message: "URL encurtada com sucesso!"});
    } catch (err) {
        return res.status(400).json({err});
    }
};
