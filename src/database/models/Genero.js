module.exports = (sequelize, dataTypes) => {

    let alias = 'Generos';
    let columnas = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: dataTypes.STRING
            },
        ranking: {
            allowNull: false,
            type: dataTypes.STRING
        }
    }
    let config = {
        tableName: "genres",
        timestamps: false
    }

    const Genero = sequelize.define(alias,columnas,config);


    Genero.associate = function(modelos){
        Genero.hasMany(modelos.Peliculas,{
            as: "peliculas",
            foreignKey: "genre_id"
        })
    }


    return Genero;

}