const bodyParser = require("body-parser");

const express =require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rutasMueble = require('./routes/routerMuebles')
const rutasModelo =require('./routes/routerModelos')

const PORT =process.env.PORT || 3000
const DB_CONNECTION = process.env.DB_CONNECTION || 'mongodb+srv://Sara:$ara123@cluster0.syylwu5.mongodb.net/Ejercicio'
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect(DB_CONNECTION);
const connection = mongoose.connection;

connection.once('open',()=>{
  console.log('conexion a la BD exitosa');
})
connection.on('error',(err)=>{
  console.log('ha habido un error',+err);
})
//  const Muebles = mongoose.model('Muebles',{
//     Tag:String,
//     Articulo:String,
//     Autor:String,
//     Descripcion:String,
//     Src:String })

  //  const Modelos = mongoose.model('Modelos',{
  //   Nombre:String,
  //   Autor:String,
  //   Descripcion:String,
  //   Src:String })
 
   app.get('/',(req,res)=>{
    res.json('respuesta')
   })
  //   app.get('/muebles',(req,res)=>{
   
  //    Muebles.find().then(doc=>{
  //     console.log(doc);
  //     res.json( {arrayMuebles:doc} )
     
     
  //    })
  //  })
 
app.use('/muebles',rutasMueble)
app.use('/modelos',rutasModelo)

const manejadorErrores = (req,res,next)=>{
  console.err(err.stack);
  res.status(500).send('Algo ha salido mal')
}
rutasMueble.use((err,req,res,next)=>{
  console.error(err.stack);
  res.status(404).send('Ruta no encontrada para mueble')
})

rutasMueble.use((err,req,res,next)=>{
  console.error(err.stack);
  res.status(500).send('Error del servidor de Muebles')
})
app.use(manejadorErrores)
rutasModelo.use((req,re,next)=>{
  console.error(err,stack);
  res.status(404).send('Ruta no encontrada para modelo')
})
rutasModelo.use((err,req,re,next)=>{
  console.error(err,stack);
  res.status(500).send('Error del servidor de modelo')
})



app.listen(PORT,()=>{
    console.log('servidor encendido');
})
