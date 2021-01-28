const db = require("../database/models");

let moviesController = {
    index: async function(req,res){

        try{
            const peliculas = await db.Peliculas.findAll();
            res.render("index", {css: 'slider', peliculas})
        }catch(error){
            console.log(error);
        }
    }
}

module.exports = moviesController;