// Esto es un middleware - una funcion que se ejecuta antes de llegar al controlador 

const validator = (req, res, next)=>{
   if (req.body === " "){
      return res.json({error: 'No se puede dejar este espacio en blanco'})
   } 
   next() //si no se cumple la condición, que prosiga a llamar al controlador
}
// Mirar mas tarde como funciona bien el validador.
module.exports = validator