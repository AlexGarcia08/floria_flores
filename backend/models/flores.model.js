import {Schema, model} from 'mongoose'

const esquemaFlor = new Schema({
    flor:{
        type: String
    },
    color:{
        type: String
    }
 })
 

export const Modelo = new model ('Flores', esquemaFlor)