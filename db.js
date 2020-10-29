const mongoose = require('mongoose') //Paquete que permite la comunicación con nuestra base de datos.

const conectDB = () => {
    /*
    Método connect en mongoose => Permite conectarme a una base de datos, tiene unas opciones que son:
    -- useNewUrlParser: Analizar la información que se le quiere envíar a mongoDB.
    -- useUnifiedTopology: Escuchar los llamados que hacemos a mongoDB y monitorea que es lo que pasa.
     */
    mongoose.connect('', { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
        if(error){
            console.log('Error: ', error)
        }else{
            console.log('Nos conectamos a la DB.')
        }
    })
}
/**
 * module.exports
 * Nos permite exportar una función para que pueda ser utilizada en otra parte de nuestro proyecto.
 */
module.exports = { conectDB }