module.exports = (sequelize, dataTypes) => {

    let alias = 'Peliculas';
    let columnas = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        title: {
            allowNull: false,
            type: dataTypes.STRING
            },
        rating: {
            allowNull: false,
            type: dataTypes.STRING
        },
        awards: {
            allowNull: false,
            type: dataTypes.STRING
        },
        length:{
            allowNull: false,
            type: dataTypes.STRING
        },
        release_date:{
            allowNull: false,
            type: dataTypes.STRING
        },
        genre_id:{
            allowNull: false,
            foreignKey: true,
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: "movies",
        timestamps: false
    }

    const Pelicula = sequelize.define(alias,columnas,config);


    Pelicula.associate = function(modelos){
        Pelicula.belongsTo(modelos.Generos,{
            as: "genero",
            foreignKey: "genre_id"
        })
        
        Pelicula.belongsToMany(modelos.Actores,{
            as: "actores",
            through: "actor_movie",
            foreignKey: "movie_id",
            otherKey: "actor_id",
            timestamps: false
        })
    }

    return Pelicula;

}