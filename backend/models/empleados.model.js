import { esquema } from "./clientes.model.js";
import {model} from 'mongoose'

export const modeloEmpleados = new model('Empleados', esquema)