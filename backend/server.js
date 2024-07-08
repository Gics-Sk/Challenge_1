const express = require('express');
const app = express();
const userRoutes = require('./router/userRoutes');
const port =3001;

app.use('/api', userRoutes);

app.get('',(req,res)=>{
    res.send("le serveur marche très bien même")
})
app.listen(port,()=>{
console.log('le serveur est lancé sur le port:' + port);
})