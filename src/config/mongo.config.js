const mongoose = require('mongoose');

const database = require('./db.config');

mongoose.Promise = global.Promise;

mongoose.connect(
    database.local.localUrlDatabase,
    async (err) => {
        if (err) {
            console.log(`Erro ao conectar com a Base de Dados...: ${err}`);
            process.exit();
        };
        console.log('A Base de Dados foi conectada com sucesso!');
    }
)
