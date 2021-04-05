const express = require('express');
const app = express();

/* app.use((req, res)=>{
    console.log("New Request!");
    res.send('<h1>Hello this is the webpage</h1>')
}) */

app.get('/', (req, res) =>{
    res.send('This is the home page');
})

app.get('/r/:busqueda', (req, res) =>{
    const {busqueda}  = req.params;
    res.send(`Browsing the ${busqueda} key`);
})

app.get('/r/:busqueda/:id', (req,res) =>{
    //el req.params es para tomar la info de la query desde el navegador
    const {id} = req.params;
    res.send(`Looking the post of the id: ${id}`)
})

app.post('/cats', (req, res) =>{
    res.send('Post request to /cats')
})

app.get('/cats', (req, res) => {
    res.send('MIAUU!');
})

app.get('/dogs', (req,res) =>{
    res.send('GUAUU');
})









app.listen(8080, ()=>{
    console.log("Listening on port 8080");
})