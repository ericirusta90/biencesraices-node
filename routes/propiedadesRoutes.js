import express from "express"
import {body} from 'express-validator'
import {admin, crear, guardar, agregarImagen, almacenarImagen, editar, guardarCambios, eliminar,cambiarEstado ,mostrarPropiedad, enviarMensaje, verMensajes } from '../controllers/propiedadController.js'
import protegerRuta from "../middleware/protegerRuta.js"
import upload from "../middleware/subirImagen.js"
import identificarUsuario from "../middleware/identificarUsuario.js"

const router = express.Router()


router.get('/mis-propiedades',protegerRuta, admin)
router.get('/propiedades/crear', protegerRuta ,crear)
router.post('/propiedades/crear',
    protegerRuta,
    body('titulo').notEmpty().withMessage('El titulo del anuncio es obligatorio'),
    body('descripcion')
        .trim()
        .notEmpty().withMessage('La descripcion no puede ir vacia')
        .isLength({max: 200}).withMessage('La descripcion es muy larga'),
    body('categoria').isNumeric().withMessage('selecciona una categoria'),
    body('precio').isNumeric().withMessage('selecciona un rango de precios'), 
    body('habitaciones').isNumeric().withMessage('selecciona la cantidad de habitaciones'), 
    body('garaje').isNumeric().withMessage('selecciona la cantidad de lugares para autos'),
    body('banios').isNumeric().withMessage('selecciona la cantidad de baños'),
    body('lat').notEmpty().withMessage('ubica la propiedad en el mapa'),       
    guardar 
)

router.get('/propiedades/agregar-imagen/:id',
    protegerRuta,
    agregarImagen
)


router.post('/propiedades/agregar-imagen/:id', 
    protegerRuta,
    upload.single('imagen'),
    almacenarImagen    
)

router.get('/propiedades/editar/:id',
    protegerRuta,
    editar
)


router.post('/propiedades/editar/:id',
    protegerRuta,
    body('titulo').notEmpty().withMessage('El titulo del anuncio es obligatorio'),
    body('descripcion')
        .trim()
        .notEmpty().withMessage('La descripcion no puede ir vacia')
        .isLength({max: 200}).withMessage('La descripcion es muy larga'),
    body('categoria').isNumeric().withMessage('selecciona una categoria'),
    body('precio').isNumeric().withMessage('selecciona un rango de precios'), 
    body('habitaciones').isNumeric().withMessage('selecciona la cantidad de habitaciones'), 
    body('garaje').isNumeric().withMessage('selecciona la cantidad de lugares para autos'),
    body('banios').isNumeric().withMessage('selecciona la cantidad de baños'),
    body('lat').notEmpty().withMessage('ubica la propiedad en el mapa'),       
    guardarCambios 
)

router.post('/propiedades/eliminar/:id' , 
    protegerRuta,
    eliminar    
)

router.put('/propiedades/:id',
    protegerRuta,
    cambiarEstado
)


// AREA PUBLICA

router.get('/propiedad/:id',
    identificarUsuario,
    mostrarPropiedad
)

// Almacenar los mensajes
router.post('/propiedad/:id',
    identificarUsuario,
    body('mensaje').isLength({min: 10}).withMessage('El mensaje no puede ir vacio, o es muy corto'),
    enviarMensaje
)

router.get('/mensajes/:id',
    protegerRuta,
    verMensajes
)

export default router