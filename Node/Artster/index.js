const figlet = require ("figlet");
const colors = require("colors");

figlet("Hola a todos!", function(err, data){
    if(err){
        console.log("Hubo algun error!");
        console.dir(err);
        return;
    }
    console.log(data.rainbow);
})

//Mezclamos los dos paquetes npm, figlet, y colors!