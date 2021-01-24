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
    },
    create: async function(req,res,next){

        // BUSCAR GENEROS

        try{
            const generos = await db.Generos.findAll();
            res.render("movieCreate", {css: "create", generos})
        }
        catch(error){
            console.log(error)
        }
    },
    store: async function(req,res,next){
        
        try {
            await db.Peliculas.create({
                title: req.body.titulo,
                rating: req.body.rating, 
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre
            })
            res.redirect("/movies")
        }catch(error){
            console.log(error)
        }
    },
    edit: async function(req,res,next){

        try{
            const pk = req.params.id;
            const pelicula = await db.Peliculas.findByPk(pk)
            const generos = await db.Generos.findAll();

            res.render("movieEdit", {pelicula, generos, css: 'movieEdit'})
        }catch(error){
            console.log(error);
        }

    },
    actualize: async function(req,res,next){
    
        try {
            await db.Peliculas.update({
                title: req.body.titulo,
                rating: req.body.rating, 
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre
            },{
                where: {
                    id: req.params.id
                }})
            res.redirect("/movies/"+req.params.id)
        }catch(error){
            console.log(error)
        }

    }

}

module.exports = moviesController;