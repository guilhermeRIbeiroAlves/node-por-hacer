//const argv = require('yargs').argv
const argv = require('./config/yargs').argv
const colors = require('colors')

const porhacer = require('./porhacer/porhacer')



let comando = argv._[0]

switch (comando) {
    case 'crear':
        //console.log('crear por hacer')
        let tarea = porhacer.crear(argv.descripcion) //esta funcion retorna una tarea por hacer por eso la almaceno
            //en variable que porhacer retorna del archivo porhacer
        console.log(tarea)
        break;

    case 'listar':
        let listado = porhacer.getlistado()

        for (let tarea of listado) {
            console.log('=======por hcaer===='.green)
            console.log(tarea.descripcioon)
            console.log('estado:', tarea.completado)
            console.log('============'.green)
        }
        break;
    case 'borrar':
        let borrado = porhacer.borrar(argv.descripcion)
        console.log(borrado)
        break;



    case 'actualizar':
        let actualizado = porhacer.actualizar(argv.descripcion, argv.completado)
        console.log(actualizado)
        break;

    default:
        console.log('comando no reconocido')

}