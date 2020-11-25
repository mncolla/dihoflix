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
        }
    }
    let config = {
        tableName: "movies",
        timestamps: false
    }

    const Pelicula = sequelize.define(alias,columnas,config);


    return Pelicula;

}