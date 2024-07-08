const express = require('express');
const router = express.Router();

//Route pour l'inscription
router.post('/api/register',(req,res)=>{
    res.send("Route inscription");
    res.end();
});
// Route pour la connexion
router.post('/api/login',(req,res)=>{
    res.send("Route connexion");
    res.end();
});
module.exports = router;
