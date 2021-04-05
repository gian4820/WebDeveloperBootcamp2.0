//Para que funcione este proyecto, hay que abrir un terminal y en directorio actual poner. node cap319_boilerplate.js nombre_carpeta
//en la cual el nombre de la carpta se lo asignamos nosotros, y automaticamente te crea los 3 archivos. 


const fs = require ('fs');
const folderName = process.argv[2] || 'Project';

//Asyncronous mode
/* fs.mkdir('Dogs', {recursive:true}, (err) =>{
    console.log("IN THE CALLBACK")
    if(err) throw err;
}); */

//Sync Mode
try{
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`)
    fs.writeFileSync(`${folderName}/app.js`)
    fs.writeFileSync(`${folderName}/app.cs`)
}catch(e){
    console.log("Something went wrong");
    console.log(e);
}