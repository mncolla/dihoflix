let db = require ("../database/models");
const { Op } = require("sequelize");
const moment = require('moment');
const { validationResult } = require('express-validator');


let moviesController = {

    list: async (req, res, next) =>{
        
        try{
            const peliculas = await db.Peliculas.findAll()
            res.render("moviesList",{peliculas, titulo: "Todas las peliculas", css: 'moviesList'})
        }catch(error){
            console.log(error);
        }
            
    },
    mostrar: async (req, res, next) =>{
        
        try{
            const pk = req.params.id;
            const genero = await db.Generos.findByPk(pk, {include: [{association: "peliculas"}]});
            const peliculas = await db.Peliculas.findAll();
            res.render("genreDetail", {genero, peliculas, css: 'genreDetail'})
        }catch(error){
            console.log(error);
        }
           
        
    }
}

module.exports = moviesController;