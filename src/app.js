const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongo = require("./config/mongo.config");

const app = express();

const index = require("./routes/index");
const userRoutes = require("./routes/user.routes");
const shortenerRoutes = require("./routes/shortener.routes");
const shortenerAuthRoutes = require("./routes/shortener_auth.routes");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.json({type: "application/vnd.api+json"}));
app.use(morgan("dev"));
app.use(cors());

app.set("mongoose connection", mongo);

app.use(index);
app.use('/', userRoutes);
app.use('/', shortenerRoutes);
app.use('/', shortenerAuthRoutes);

module.exports = app;