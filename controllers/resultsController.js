const express = require('express');

function sum(req, res, next){
    
    let z = parseInt(req.params.n1) + parseInt(req.params.n2);
    res.json(`${z}`);
};

function multiplication(req, res, next){
    n1 = parseInt(req.body.n1);
    n2 = parseInt(req.body.n2);
    
    res.send(`${req.body.n1 * req.body.n2}`);
};

function divide(req, res, next){
    n1 = parseInt(req.body.n1);
    n2 = parseInt(req.body.n2);
    
    res.send(`${(req.body.n2 != 0)? req.body.n1 / req.body.n2 : "indefinido"}`);
};

function substraction(req, res, next){
    n1 = parseInt(req.body.n1);
    n2 = parseInt(req.body.n2);
    
    res.send(`${req.body.n1 - req.body.n2}`);
};

module.exports = {
    sum,
    multiplication,
    divide,
    substraction
};