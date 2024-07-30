import { ModeloPagos } from "../models/pagos.model.js";

export const testPagos = () =>{
    console.log('funciona el controlador de pagos')
}

ModeloPagos.create({
    precio: 350,
    fechaLLegada: "2 de marzo"
})