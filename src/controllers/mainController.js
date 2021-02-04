const db = require("../database/models");

let moviesController = {
    index: async function(req,res){

        try{
            res.render("main")
            
        }catch(error){
            console.log(error);
        }
    },
    actuacion: async function(req,res){

        try{

            const peliculas = await db.Peliculas.findAll();
            const actores = await db.Actores.findAll();


            res.render("actuacion",{css:'movieEdit', actores,peliculas});
            
        }catch(error){
            console.log(error);
        }
    },
    asignar: async function(req,res){

        try{

            const idActor = req.body.actor;
            const idMovie = req.body.movie;
            db.ActorMovie.create({
                actor_id: idActor,
                movie_id: idMovie
            });

            res.redirect('/movies/')
            
        }catch(error){
            console.log(error);
        }
    }
}

module.exports = moviesController;