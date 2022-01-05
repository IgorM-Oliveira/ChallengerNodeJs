# ChallengerNodeJs

```bash
# Requirement
- MongoDB

# Install MongoDB
$ curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
$ sudo apt-key list
$ echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
$ sudo apt update
$ sudo apt install mongodb-org
$ sudo systemctl start mongod.service
$ sudo systemctl status mongod

# Install MongoDB Compass
$ wget https://downloads.mongodb.com/compass/mongodb-compass_1.29.6_amd64.deb
$ sudo dpkg -i mongodb-compass_1.29.6_amd64.deb
$ mongodb-compass

# Install Dependencies
$ yarn install

# Initial Server MongoDB
$ sudo service mongod start

# Serve with hot reload at localhost:3000
$ nodemon

# Build for production and launch server
$ node build
$ node serve
```
