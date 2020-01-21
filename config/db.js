const mongoose=require('mongoose')
const config=require('config')
const db=config.get('MongoURI')
mongoose.set('useUnifiedTopology', true)
const connectDB=async()=>{
    try{
        mongoose.connect(db,{ useNewUrlParser: true }).then(()=>{
            console.log('connected to database');
        }).catch(err=>{
            console.log(err);
        })
        
    }
    catch(err){
        console.log(err.message)
        process.exit(1)
    }
}
module.exports=connectDB