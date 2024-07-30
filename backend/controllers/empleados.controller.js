import { modeloEmpleados } from "../models/empleados.model.js";

export const testEmpleados = () =>{
    console.log("funciona el controlador del empleado")
}

modeloEmpleados.create({
    name:"Erik"
})