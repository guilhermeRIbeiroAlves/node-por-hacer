//aki meto la logica

const fs = require('fs') //para grabar en lugar fisico

let listadoporhacer = [] //aki almaceno notas

const guardarBD = () => {
    let data = JSON.stringify(listadoporhacer)

    //const data = new Uint8Array(Buffer.from(listadoporhacer))
    fs.writeFile("BD/data.json", data, (err) => {
        //el segundo la data que quierop grabar
        //priimero el path con el nombre del archivo que quiero grabar
        if (err)
            throw new Error('no se puede grabar', err)
    })
}
const cargarBD = () => {
    try {;
        listadoporhacer = require('../BD/data.json')
    } catch (error) {
        listadoporhacer = []
    }



}


const crear = (descripcioon) => {
    cargarBD()
    let porhacer = {
        descripcioon,
        completado: false
    };



    listadoporhacer.push(porhacer)
    guardarBD();
    return porhacer
}


const getlistado = () => {
    cargarBD()
    return listadoporhacer;
}

const actualizar = (descripcioon, completado = true) => {
    cargarBD()
    let index = listadoporhacer.findIndex(tarea => tarea.descripcioon === descripcioon)

    if (index >= 0) {
        listadoporhacer[index].completado = completado
        guardarBD()
        return true

    } else {
        return false
    }
}

const borrar = (descripcioon) => {
    cargarBD() //primero cargo basedatos sino nos e que hay
    let nuevolistado = listadoporhacer.filter(tarefa => tarefa.descripcioon != descripcioon)
        //o filtar algun alemento en particular y REGRESA NUEVO ARREGLO
        // return tarefa.descripcioon != descripcioon >> esto no hace falta poner return

    if (listadoporhacer.length === nuevolistado.length) {
        return false
    } else {
        listadoporhacer = nuevolistado;
        guardarBD()
        return true
    }

}


module.exports = {
    crear,
    getlistado,
    actualizar,
    borrar
}