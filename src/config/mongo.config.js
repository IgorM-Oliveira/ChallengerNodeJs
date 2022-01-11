const mongoose = require('mongoose');
const database = require('./db.config');

mongoose.Promise = global.Promise;

mongoose.connect(
    database.connect.localUrlDatabase,
    async (err) => {
        if (err) {
            console.log(`Erro ao conectar com a Base de Dados...: ${err}`);
            process.exit();
        }
        console.log('Conexão ao banco estabelecida!');
    }
)