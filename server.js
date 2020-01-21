const express=require('express')
const app=express()
const connectDB=require('./config/db')
connectDB()
const PORT=process.env.PORT || 5000
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.json({extended:false}))
app.listen(PORT,()=>console.log("server started on port "+PORT))
app.get('/',(req,res)=>res.send("app running"))
app.use('/api/users',require('./routes/api/users'))
app.use('/api/auth',require('./routes/api/auth')) 