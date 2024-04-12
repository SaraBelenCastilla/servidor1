

const mongoose =require('mongoose')

const Muebles = mongoose.model('Muebles',{
    Tag:String,
    Articulo:String,
    Autor:String,
    Descripcion:String,
    Src:String })


exports.getAllMuebles =(req,res,next)=>{

    try {
       
        Muebles.find().then(doc=>{
            console.log(doc);
            res.status(200).json( {arrayMuebles:doc} )
        })  
    } catch (error) {
        next(error)
    }
   
   
    
    
  }