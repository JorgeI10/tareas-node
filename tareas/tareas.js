const fs = require('fs');

let listadoTareas = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoTareas);

    fs.writeFile('db/data.json', data, (error) => {
        if (error) {
            throw new Error('No se pudo guardar', error)
        }
    })
};

const cargarDB = () => {
    try {
        listadoTareas = require('../db/data.json');
    } catch (e) {
        listadoTareas = [];
    }
};

const crear = descripcion => {

    cargarDB();

    let tarea = {
        descripcion,
        completado: false
    }

    listadoTareas.push(tarea);

    guardarDB();

    return tarea;
};

const getTareas = () => {
    cargarDB();

    return listadoTareas;
};

const actualizar = (descripcion, estado) => {
    cargarDB();

    let index = listadoTareas.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoTareas[index].completado = estado;
        guardarDB();
        return true;
    } else {
        return false;
    }
};

const eliminar = descripcion => {
    cargarDB();

    let nuevoListado = listadoTareas.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoTareas.length > nuevoListado.length) {
        listadoTareas = nuevoListado;
        guardarDB();
        return true;
    } else {
        return false;
    }

};

module.exports = {
    crear,
    getTareas,
    actualizar,
    eliminar
};