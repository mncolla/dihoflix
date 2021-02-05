const {body} = require("express-validator");
//var path = require("path")

module.exports={
    actor: [
        body("nombre")
        .notEmpty()
        .withMessage("El nombre es obligatorio")
        .bail()
        .isLength({min: 3, max: 25})
        .withMessage("Debe tener entre 3 y 25 caracteres"),
        body("apellido")
        .notEmpty()
        .withMessage("El apellido es obligatorio")
        .bail()
        .isLength({min: 2, max: 25})
        .withMessage("Debe tener entre 2 y 25 caracteres"),
        body("rating")
        .notEmpty()
        .withMessage("El rating es obligatorio")
        .bail()
        .isFloat()
        .withMessage("El rating debe ser un número")
    ]
}