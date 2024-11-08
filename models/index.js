import Propiedad from './Propiedad.js' 
import Precio from './Precio.js' 
import Categoria from './Categoria.js' 
import Usuario from './Usuario.js'
import Mensaje from './Mensaje.js'



Propiedad.belongsTo(Precio, {foreignKey: 'precioId'});  // una propiedad tiene un precio
Propiedad.belongsTo(Categoria, {foreignKey: 'categoriaId'});  // una propiedad tiene una categoria
Propiedad.belongsTo(Usuario, {foreignKey: 'usuarioId'});  // una propiedad tiene un usuario
Propiedad.hasMany(Mensaje, {foreignKey: 'propiedadId'});  // una propiedad puede tener muchos mensajes de diferentes personas

Mensaje.belongsTo(Propiedad, { foreignKey: 'propiedadId'})
Mensaje.belongsTo(Usuario, {   foreignKey: 'usuarioId'})




export {
    Propiedad,
    Precio,
    Categoria,
    Usuario,
    Mensaje
}

