const service = require('../services/index')//Metodo para validar si la persona tiene una sesion iniciada 
// Req-----> Todos los parametros que reciben
// Res-----> Respuesta que se devuelve
// Next----> Middleware, si todo sale bien, se ejecuta el metodo que necesitamos que se ejecute
exports.auth = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(400).send({
            message: 'No tienes permiso para realizar esta operacion'
        })
    }


    const token = req.headers.authorization.split(' ')[1]  

    service.decodeToken(token)

    .then(
        (respon) => {
            req.user = respon
            next()
        }
    )
    .catch(
        (error)=> {
            res.status(error.status).send({
                message: error.message
            })
        }
    )
} 