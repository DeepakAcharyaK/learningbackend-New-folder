import express from 'express';
const app=express();
const port=process.env.PORT || 3000;
app.get('/',function(req,res){
    res.send('index page')
})

app.listen(port,function(){
    console.log(`server is running : http://localhost:${port}`)
})