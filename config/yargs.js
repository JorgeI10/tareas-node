const descripcion = { alias: 'd', demand: true };

const completado = { alias: 'c', default: true };

const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado de una tarea', { descripcion, completado })
    .command('eliminar', 'Elimina una tarea deseada', { descripcion })
    .help()
    .argv;
//console.log(argv);

module.exports = {
    argv
};