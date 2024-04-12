const mongoose =require('mongoose')

const Modelos = mongoose.model('Modelos',{
    Nombre:String,
    Autor:String,
    Descripcion:String,
    Src:String })


exports.getAllModelo =(req,res,next)=>{

    try {
        Modelos.find().then(doc=>{
            console.log(doc);
            res.status(200).json({arrayModelos:doc})
          }) 
    } catch (error) {
       next(error)
    }

   
   
  }