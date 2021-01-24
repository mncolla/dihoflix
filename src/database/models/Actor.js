module.exports = (sequelize, dataTypes) => {

    let alias = 'Actores';
    let columnas = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        first_name: {
            allowNull: false,
            type: dataTypes.STRING
            },
        last_name: {
            allowNull: false,
            type: dataTypes.STRING
        },
        rating:{
            allowNull: false,
            type: dataTypes.STRING
        }
    }
    let config = {
        tableName: "actors",
        timestamps: false
    }

    const Actor = sequelize.define(alias,columnas,config);


    return Actor;

}