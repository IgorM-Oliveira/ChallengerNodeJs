<h1 align="center">
    <img alt="React RocketShoes" src="https://miro.medium.com/max/1400/0*MNVJq_8e0SJoqZb5.jpg" />
    <br>
    Challenger NodeJs
</h1>

<h4 align="center">
  <a href="#install-mongodb">Install MongoDB</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#install-mongodb-compass">Install MongoDB Compass</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#start-mongodb">Start MongoDB</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#configuration-project">Configuration Project</a>
</h4>

- Caso já tenha instalado o MongoDB e o MongoDB Compass, vá diretamente ao <a href="#configuration-project">Configuration Project</a>

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

[node-image]: https://medium.com/thdesenvolvedores/node-js-o-que-%C3%A9-por-que-usar-e-primeiros-passos-1118f771b889