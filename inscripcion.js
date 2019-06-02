const datos = {
    idCurso:{
        demand:true,
        alias: 'i',
    },
    nombre:{
        demand:true,
        alias: 'n',
    },
    cedula:{
        demand:true,
        alias: 'c',
    },
}

const argv = require('yargs')
            .command('inscribirme','Inscribirme a un curso ',datos)
            .argv
const cursos = require('./cursos');
const fs = require('fs');
const express = require('express')
const app = express()

let mostrar =(texto)=>{
    app.get('/', function (req, res) {
        res.send(texto);
      })
      app.listen(3000);
}
let crear = () =>{
       let cr=cursos.buscarCurso(argv.idCurso);
       text='El estudiante : '+argv.nombre+'\n';
       text+='Se ha inscrito a el curso : '+cr.id+'\n';
       text+='Nombre del curso : '+cr.nombre+'\n';
       text+='Duracion : '+cr.duracion+'\n';
       text+='Costo : '+cr.costo;
       mostrar(text);
}

if(!cursos.buscarCurso(argv.idCurso)){
mostrar(cursos.verCursos());
}else{
crear();
} 


