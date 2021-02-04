let db = require ("../database/models");
const { Op } = require("sequelize");
let actorsController = {

    list: async (req, res, next) =>{
        
        try{
            const actors = await db.Actores.findAll()
            res.render("actorsList",{actors, titulo: "Todos los actores", css: 'actorsList'})
        }catch(error){
            console.log(error);
        }
            
    },
    mostrar: async (req, res, next) =>{
        
        try{
            const pk = req.params.id;
            const actor = await db.Actores.findByPk(pk, {include: [{association: "peliculas"}]});
            const peliculas = await db.Peliculas.findAll();
            res.render("actorDetail", {actor, peliculas, css: 'actorDetail'})
        }catch(error){
            console.log(error);
        }
           
        
    },
    mostrarRecomendados: async (req, res, next) =>{
        try{
            const actors = await db.Actores.findAll({
                where: {
                    rating: {
                        [Op.gte] : 8,
                    }
                },
                order: [
                ['rating', 'DESC']
                ]
            })
        
        res.render("actorsList", {actors, titulo: "Actores recomendados", css: 'actorsList'})
        
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
    },
    create: async function(req,res,next){

        // BUSCAR GENEROS

        try{
            const peliculas = await db.Peliculas.findAll();
            res.render("actorCreate", {css: "movieCreate", peliculas})
        }
        catch(error){
            console.log(error)
        }
    },
    store: async function(req,res,next){
        
        try {
            await db.Actores.create({
                first_name: req.body.nombre,
                last_name: req.body.apellido,
                rating: req.body.rating, 
                favorite_movie_id: req.body.favorite_movie  
            })
            res.redirect("/actors")
        }catch(error){
            console.log(error)
        }
    }
}

module.exports = actorsController;