let db = require ("../database/models");
const { Op } = require("sequelize");
let moviesController = {

    list: function(req,res){
        db.Peliculas.findAll()
            .then(function(peliculas){
                res.render("moviesList",{peliculas: peliculas})
            })
    },
    mostrar: function(req,res){
        let pk = req.params.id;
        db.Peliculas.findByPk(pk)
            .then(function(pelicula){
                res.render("movieDetail", {pelicula: pelicula})
            })
    }, 
    mostrarNuevas: function(req,res){
        db.Peliculas.findAll({
            order: [
                ['release_date','ASC'],
            ],
            limit: 5,
        })
            .then(function(peliculas_nuevas){
                res.render("moviesNuevas", {peliculas_nuevas: peliculas_nuevas})
            })
    },
    mostrarRecomendadas: function(req,res){
        db.Peliculas.findAll({
            where: {
                rating: {
                    [Op.gte] : 8,
                }
            }
        })
            .then(function(peliculas_recomendadas){
                res.render("moviesRecommended", {peliculas_recomendadas: peliculas_recomendadas})
            })
    }
}

module.exports = moviesController;