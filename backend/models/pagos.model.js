import {Schema, model} from 'mongoose'

export const esquemaPagos = new Schema({ //modelo
    precio:{
        type: Number
    },
    fechaLLegada:{
        type: String
    }
 })
 

 export const ModeloPagos = new model ('Pagos', esquemaPagos)