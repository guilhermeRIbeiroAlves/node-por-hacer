const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'crea una nueva entrada', {
        descripcion

    })

.command('borrar', 'elimina una nueva entrada', {
        descripcion
    })
    .command('actualizar', 'crea una nueva entrada', {
        descripcion: descripcion,
        completado
    })
    .help()
    .argv

module.exports = {
    argv
}