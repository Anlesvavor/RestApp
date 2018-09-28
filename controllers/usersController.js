const express = require('express');

function create(req, res, next){
    res.send(`Crea un usuario con nombre: ${req.body.name}`);
};

function list(req, res, next){
    //let name = req.params.name ? req.params.name : 'SIN NOMBRE';
    res.render('users/list', {name: req.params.name});
};

function index(req, res, next){
    res.send(`Lista un usuario con un ID ${req.params.id}`)
};

function update(req, res, next){
    res.send("Edita un usuario con un ID especifico");
};

function destroy(req, res, next){
    res.send("Elimina un usuario con un ID especifico");
};


module.exports = {
    create,
    list,
    index,
    update,
    destroy
};