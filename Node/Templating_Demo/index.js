/* 
Para iniciar la aplicacion debemos:
    1. npm init
    2. npm i express
    3. npm i ejs

*/
const express = require('express');
const app = express();
const path = require ('path');
const redditData = require('./data.json')

//aqui ponemos los archivos estaticos 
//el pàth join lo ponemos para que se pueda  jecutar la carpeta public, sin necesidad de ejecutar node en este directorio
app.use(express.static (path.join(__dirname, '/public'));

//ejs lo utilizamos para mostrar estructuras HTML desde node
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) =>{
    //aca no le decimos el directorio views, ya que por defecto todas los ejs hay que ponerlo dentro de la carpeta views
    res.render('home.ejs');
})

app.get('/r/:subreddit', (req, res) => {
    //aca tomamos como parametro lo ingresado desde la web, y lo asignamos a reddit
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    if(data){
        res.render('subreddit', {...data})
    }else{
        res.render('notfound', {subreddit});
    }
})


app.get('/random', (req, res) =>{
    const num = Math.floor(Math.random() * 10)+ 1;
    res.render('random', {random:num});
})

app.get('/ufc', (req, res) =>{
    const ufc = ['Aldo', 'Connor mc Gregor', 'Jorges Saint Pier', 'Wanderlei Silva']
    res.render('ufc', {ufc})
})






app.listen(3000, () =>{
    console.log('SERVER LISTENING ON PORT 3000');
})