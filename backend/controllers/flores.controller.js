import { Modelo } from "../models/flores.model.js";

export const testFlores =() =>{
    console.log('Si funcina la conexion de flores')
}

Modelo.create({
    flor: "Rosa",
    color: "blanco"
})