let db = require ("../database/models");
const { Op } = require("sequelize");
let moviesController = {

    list: function(req,res){
        db.Peliculas.findAll()
            .then(function(peliculas){
                res.render("moviesList",{peliculas: peliculas, titulo: "Todas las peliculas", css: 'moviesList'})
            })
    },
    mostrar: function(req,res){
        let pk = req.params.id;
        db.Peliculas.findByPk(pk)
            .then(function(pelicula){
                res.render("movieDetail", {pelicula: pelicula, css: 'movieDetail'})
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
                res.render("moviesList", {peliculas: peliculas_nuevas, titulo: "Estrenos", css: 'moviesList'})
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
                res.render("moviesList", {peliculas: peliculas_recomendadas, titulo: "Aclamadas por el público", css: 'moviesList'})
            })
    }
}

module.exports = moviesController;