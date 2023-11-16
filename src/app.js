const express = require('express');
const app = express();
const port = 80;

app.listen(port,()=> {console.log('listen port 80');})

app.get('/', (req,res)=>{
    res.send('Deployed with GitHub Actions and ArgoCD! *0*');
})
