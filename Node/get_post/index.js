/*
Instalamos: 

este es para traajar con ejs
npm i ejs

este es para generar un id automatico
npm i uuid

este es para editar los comentarios,y poner en la url ?_method=
npm i method-override

*/


const { randomUUID, X509Certificate } = require('crypto');
const express = require ('express');
const app = express ();
const path = require('path');
const methodOverride = require ('method-override');
const {v4 : uuid} = require('uuid');


//middleware
app.use(express.urlencoded({extended: true}));
//con este middleware nos da la posibilidad de enviar info x json
app.use(express.json());
//aca usamos el _method para hacer el override en el form
app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, 'views'))

//instalamos ejs para que podamos crear las rutas
app.set('view engine', 'ejs');

//creamos una especie de DB, pero con JSON
let comments = [
    {   
        id: uuid(),
        username: 'Pedro',
        comment: 'Que buen comentario'
    },
    {   
        id: uuid(),
        username: 'Polo Reyes',
        comment: 'Para mi no es tan bueno, que queres que te diga'
    },
    {
        id: uuid(),
        username: 'Jose Alvarez',
        comment: 'Esto es asombroso'
    },
    {   
        id: uuid(),
        username: 'Roberto Carlos',
        comment: 'Mira el golazo que hice!'
    }
]

//RUTAS
//creamos la primera ruta que es el EJS para los comentarios
app.get('/comments', (req, res) =>{
    res.render('comments/index', { comments } )
})

//ruta para el formulario, de crear nuevo comentario
app.get('/comments/new', (req, res) =>{
    res.render('comments/new');
})

//ruta en la cual creamos el nuevo comentario, y lo agregamos al array! 
app.post('/comments', (req, res) =>{
    //console.log(req.body);
    //el req.body es el que trae la info del post
    const {username, comment} = req.body;
    comments.push ({username, comment, id: uuid()})
    //res.send("Ok, it work so well!");
    res.redirect('/comments');
})


app.get('/comments/:id', (req, res) =>{
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', {comment})
})

//edit comment
app.get('/comments/:id/edit', (req, res)=>{
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', {comment})
})

//esta ruta actualiza el comentatio
app.patch('/comments/:id',(req,res) => {
    const { id } = req.params;
    const newCommentText =  req.body.comment;
    const foundComment = comments.find(c => c .id === id);
    foundComment.comment=newCommentText; 
    res.redirect('/comments');
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter( c => c.id !== id)
    res.redirect('/comments');
})

/* ------------------------------------------------------------------- */

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) =>{
    //aqui vemos la info que le enviamos por post desde el form. Necesitamos previamente poner el middleware
    const {meat, quantity} = req.body;
    res.send(`You put ${quantity} of ${meat}`)
})

/* ------------------------------------------------------------------- */

app.listen(3000, ()=>{
    console.log("LISTENING ON PORT 3000");
})


