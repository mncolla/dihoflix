let db = require ("../database/models");
const { Op } = require("sequelize");
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
            const pelicula = await db.Peliculas.findByPk(pk)
            res.render("movieDetail", {pelicula, css: 'movieDetail'})
        }catch(error){
            console.log(error);
        }
           
        
    }, 
    mostrarNuevas: async (req, res, next) =>{
        try{
            const peliculas = await db.Peliculas.findAll({
            order: [
                ['release_date','ASC'],
            ],
            limit: 5,
        })
        res.render("moviesList", {peliculas, titulo: "Estrenos", css: 'moviesList'})    
        
        }catch(error){
            console.log(error);
        }        
    },
    mostrarRecomendadas: async (req, res, next) =>{
        try{
            const peliculas = await db.Peliculas.findAll({
                where: {
                    rating: {
                        [Op.gte] : 8,
                    }
                }
            })
        
        res.render("moviesList", {peliculas, titulo: "Aclamadas por el público", css: 'moviesList'})
        
        }catch(error){
            console.log(error);
        }
            
    },
    
    search: async (req, res, next) => {
        try{
            const peliculas = await db.Peliculas.findAll({
                where: {
                    title: {
                        [db.Sequelize.Op.like]: `%${req.body.search}%` 
                    }
                },
                order: [
                ['title', 'ASC']
                ]
                
            })  
            res.render("moviesList", {titulo: "Resultados de la búsqueda: "+req.body.search, css: 'moviesList', peliculas})
     
        }catch(error){
            console.log(error);
        }
    }
}

module.exports = moviesController;