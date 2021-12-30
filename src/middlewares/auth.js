const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.js')

module.exports = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({message: "Token não informado!"});
        }

        const parts = authHeader.split(' ')

        if (!parts.length === 2) {
            return res.status(401).json({message: "Token destruido!"});
        }

        const [scheme, token] = parts

        if (!/^Bearer$/i.test(scheme)) {
            return res.status(401).send({error: 'Token mal formatado'});
        }

        jwt.verify(token, authConfig.secret, (err, decoded) => {
            if (err) {
                return res.status(401).json({message: "Token invalido!"});
            }

            req.userId = decoded.id
            return next();
        })
    } catch (err) {
        return res.status(401).json({ message: 'Falha na Autenticação!' });
    }
};