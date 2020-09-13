const express = require("express");
const multer = require("multer");
const upload = multer();
const IPController = require("./controller/IPController");
const routes = new express.Router();

//SendIP
routes.get("/api/ip", IPController.index);

//CheckPort
routes.post("/api/scan", upload.none(''), IPController.scan);

//Error 404
routes.get('*', (req, res) => {
    res.send({Error: 'Invalid Router'});
});

module.exports = routes;
