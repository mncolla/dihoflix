let db = require ("../database/models");
let moviesController = {

    list: function(req,res){
        db.Peliculas.findAll()
            .then(function(peliculas){
                res.render("moviesList",{peliculas: peliculas})
            })
    }
}

module.exports = moviesController;