const express = require('express');
const app = express();
const path = require('path');

module.exports = function(app) {
    app.get('/stats', function (req, res) {
        res.sendFile(path.join(`${__dirname}/../public/html/stats.html`));
    })
    app.get('/exercise', function (req, res) {
        res.sendFile(path.join(`${__dirname}/../public/html/exercise.html`));
    })
};