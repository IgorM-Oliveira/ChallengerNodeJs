<h1 align="center">
    <img alt="React RocketShoes" src="https://miro.medium.com/max/1400/0*MNVJq_8e0SJoqZb5.jpg" />
    <br>
    Challenger NodeJs
</h1>

**[Install MongoDB](#install-mongo)**&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
**[Install MongoDB Compass](#install-compass)**&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
**[Start MongoDB](#start-mongo)**&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
**[Configuration Project](#config)**

Caso já tenha instalado pule as 2 primeiras orientações e va direto a `Iniciando e configurando o projeto`

## Install MongoDB
1. curl -fsSL https://www.mongodb.org/static/pgp/_server-4.4.asc_ | sudo apt-key add - 
2. sudo apt-key list 
3. echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list 
4. sudo apt update 
5. sudo apt install mongodb-org 
6. sudo systemctl start mongod.service
7. sudo systemctl status mongod

## Install MongoDB Compass
Obs.: Exacutar está parte caso queira ver os dados no banco.
1. wget https://downloads.mongodb.com/compass/mongodb-compass_1.29.6_amd64.deb
2. sudo dpkg -i mongodb-compass_1.29.6_amd64.deb 
3. mongodb-compass

## Start MongoDB
- sudo service mongod start

## Configuration Project
1. Clone o arquivo `.env.exemple`e renomei-o para `.env`.
2. Execute o comando `yarn` ou `npm install` para baixar o node modules.
3. Após a execução comando anterior, comece o projeto com `node server` ou `nodemon`.

Obs.:(Recomendace `nodemon`)