const express = require('express');
const path =require('path');
const app=express();
const message=(req,res,next) => {
    const date=new Date()
    console.log(date )
    const day=date.getDay()
    const time=date.getHours()

     if (9<= time && time<=14 , 1<=day && day<=5 ) {
      next()
     } else {
         res.send("The server is not working today")
     }
;
   
}
 
app.use(message,express.static(path.join('application')));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/application/home.html")
})


const PORT=process.env.PORT ||5000;
app.listen(PORT,(err)=>err?console.error(err):console.log(`server is running on PORT ${PORT}`))
