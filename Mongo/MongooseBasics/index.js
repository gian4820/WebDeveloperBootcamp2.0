const mongoose = require ('mongoose');
//En la linea siguiente, el /movieApp es la DB, si no existe en MongoDB, entonces la crea.  
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!")
    })
    .catch(err => {
        console.log("OH NO, IT's AN ERROR!!!!")
        console.log(err)
    })

/*

{
  title: 'Amadeus',
  year: 2000,
  score: 10,
  raring: 'R'
}
*/

//El schema lo definimos para decile a mongo el tipo de dato que utilizan
const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  scrore: Number,
  rating: String
});

//Ahora definimos el modelo, poniendo el nombre del mondelo con mayuscula Movie, y despues el Schema.
//Donde creara una coleccion llamada Movie en mongo
const Movie = mongoose.model('Movie', movieSchema);
//Aca creamos UNA nueva instancia de Movie. Cuando hacemos una sola instancia, necesitamos poner el nombre.save() para que guarde los cambios. 
//const amadeus = new Movie ({title: 'amadeus', year: 1999, score: 9, rating: 'M'});

//Cuando creamos varias instancias, no hace falta ejecutar el .save()
Movie.insertMany([
  ({title: 'Terminator', year: 1994, score: 10, rating: 'A'}),
  ({title: 'Houija', year: 2010, score: 7, rating: 'T'}),
  ({title: 'Tomb Rider', year: 2003, score: 6, rating: 'S'}),
  ({title: 'Winnie Pooh', year: 1995, score: 8, rating: 'N'}),
  ({title: 'La mujer de ayer', year: 1985, score: 4, rating: 'D'})
])
  .then(data =>{
    console.log("IT WORKED")
    console.log(data)
  })

  