import {Schema, model} from 'mongoose'

export const esquema = new Schema({ //modelo
    name:{
        type: String
    }
 })
 

export const ModeloClientes = new model ('Clientes', esquema)