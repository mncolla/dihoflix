let db = require ("../database/models");
const { Op } = require("sequelize");
let actorsController = {

    list: async (req, res, next) =>{
        
        try{
            const actors = await db.Actores.findAll()
            res.render("actorsList",{actors, titulo: "Todos los actores", css: 'moviesList'})
        }catch(error){
            console.log(error);
        }
            
    },
    mostrar: async (req, res, next) =>{
        
        try{
            const pk = req.params.id;
            const actor = await db.Actores.findByPk(pk)
            res.render("actorDetail", {actor, css: 'movieDetail'})
        }catch(error){
            console.log(error);
        }
           
        
    },
    mostrarRecomendados: async (req, res, next) =>{
        try{
            const actores = await db.Actores.findAll({
                where: {
                    rating: {
                        [Op.gte] : 8,
                    }
                }
            })
        
        res.render("actorsList", {actores, titulo: "Actores recomendados", css: 'moviesList'})
        
        }catch(error){
            console.log(error);
        }
            
    },
    
    search: async (req, res, next) => {
        try{
            const actores = await db.Actores.findAll({
                where: {
                    title: {
                        [db.Sequelize.Op.like]: `%${req.body.search}%` 
                    }
                },
                order: [
                ['title', 'ASC']
                ]
                
            })  
            res.render("actorsList", {titulo: "Resultados de la búsqueda: "+req.body.search, css: 'moviesList', actores})
     
        }catch(error){
            console.log(error);
        }
    }
}

module.exports = actorsController;