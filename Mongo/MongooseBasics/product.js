const mongoose = require ('mongoose');
//En la linea siguiente, el /movieApp es la DB, si no existe en MongoDB, entonces la crea.  
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!")
    })
    .catch(err => {
        console.log("OH NO, IT's AN ERROR!!!!")
        console.log(err)
    })

//Con esta posibilidad de crear el Schema, como un objeto, nos brinda para poder ponerle mas atributos al Schema.

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number
    }
})

const Product = mongoose.model('Product', productSchema);

const bike = new Product({name: 'Mountain Bike', price: 699})

bike.save()
    .then(data=>{
        console.log("It works!")
    })
    .catch(err=>{
        console.log("Oh no! there is an error!")
        console.log(err)
    })

