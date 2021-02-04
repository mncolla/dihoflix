module.exports = (sequelize, dataTypes) => {

    let alias = 'ActorMovie';
    let columnas = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        actor_id: {
            
            type: dataTypes.INTEGER
            },
        movie_id: {
            
            type: dataTypes.INTEGER
            }
    }
    let config = {
        tableName: "actor_movie",
        timestamps: false
    }

    const ActorMovie = sequelize.define(alias,columnas,config);

    return ActorMovie;

}