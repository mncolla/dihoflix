const db = require("../database/models");

let moviesController = {
    index: async function(req,res){

        try{
            res.render("main")
            
        }catch(error){
            console.log(error);
        }
    }
}

module.exports = moviesController;