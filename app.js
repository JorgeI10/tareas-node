const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crear, getTareas, actualizar, eliminar } = require('./tareas/tareas');

const comando = argv._[0];

switch (comando) {
    case 'crear':
        const tarea = crear(argv.descripcion);
        console.log('Tarea', tarea, 'agregada');
        break;
    case 'listar':
        const tareas = getTareas();

        for (let tarea of tareas) {
            console.log('=======Tareas======='.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('===================='.green);
        }
        break;
    case 'actualizar':
        const actualizado = actualizar(argv.descripcion, argv.completado);
        if (actualizado) console.log('Se actualizó con éxito'.green)
        else console.log('No se actualizó'.red);
        break;
    case 'eliminar':
        const eliminado = eliminar(argv.descripcion);
        if (eliminado) console.log('Se eliminó con éxito'.green)
        else console.log('No se eliminó'.red);
        break;
    default:
        console.log('Comando inexistente');
        break;
}