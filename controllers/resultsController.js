const express = require('express');

function sum(req, res, next){
    let x = parseInt(req.params.n1);
    let y = parseInt(req.params.n2);
    x = x + y;
    res.send(`${x}`);
};

function multiplication(req, res, next){
    let x = parseInt(req.params.n1);
    let y = parseInt(req.params.n2);
    x = x * y;
    res.send(`${x}`);
};

function divide(req, res, next){
    let x = parseInt(req.params.n1);
    let y = parseInt(req.params.n2);
    x = y == 0 ? "indefinido" : x / y;
    
    res.send(`${x}`);
};

function substraction(req, res, next){
    let x = parseInt(req.params.n1);
    let y = parseInt(req.params.n2);
    x = x - y;
    res.send(`${x}`);
};

module.exports = {
    sum,
    multiplication,
    divide,
    substraction
};