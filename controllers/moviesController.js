let db = require ("../database/models");
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
    }
}

module.exports = moviesController;