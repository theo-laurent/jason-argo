const Argonaut = require("../models/argonauts");

exports.createArgonaut = function (req, res, next) {
  const argonaut = new Argonaut({
    nom: req.body.nom,
  });
  argonaut
    .save()
    .then(function () {
      res.status(201).json({ message: "Argonaute bien embarqué !" });
    })
    .catch(function (error) {
      res.status(400).json({ error });
    });
};

exports.getAllArgonauts = function (req, res, next) {
  Argonaut.find()
    .then(function (argonauts) {
      res.status(200).json(argonauts);
    })
    .catch(function (error) {
      res.status(400).json({ error });
    });
};

exports.deleteArgonaut = function (req, res, next) {
  Argonaut.deleteOne({ _id: req.body.id })
    .then(function () {
      res.status(200).json({ message: "Argonaute bien débarqué !" });
    })
    .catch(function (error) {
      res.status(404).json({ error });
    });
};
