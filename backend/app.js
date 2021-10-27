require("dotenv").config();
//const
const express = require("express");
const mongoose = require("mongoose");
const app = express();
//securité
const helmet = require("helmet");
//routes
const argonautsRoutes = require("./routes/argonautes");

//connection mongoDb
mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(function () {
    console.log("Connexion à MongoDb réussie!");
  })
  .catch(function (error) {
    console.log("Connexion echoué");
    console.log(error);
  });

//CORS
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-with, Content, Accept, Content-type, Authorization"
  );
  next();
});

app.use(helmet());
app.use(express.json());

app.use("/api/argo", argonautsRoutes);

module.exports = app;
