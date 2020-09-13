"use strict";
const cors = require("cors");
const express = require("express");
const app = express();
const server = require("http").Server(app);

const PORT = process.env.PORT || 4747;
const HOST = "0.0.0.0";

app.use(cors())

app.use(function(req, res, next){
    res.setTimeout(10000, function(){
        res.status(200).json({
            status: "ECONNREFUSED",
            message: "Erro ao scanear IP.",
        });
    });
    next();
});

app.use(require('./routes'))
server.listen(PORT, HOST);
console.log(`Running server on port: ${PORT}`);
