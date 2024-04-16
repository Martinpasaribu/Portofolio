import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const pesanschema = new Schema({
    uuid: {type:String, default:()=> uuidv4(), required:true, unique:true},
    email: String,
    pesan: { type: String, default: null },
    waktu: { type: Date, default: Date.now },
    
});

export const PesanModel = mongoose.model('Pesan', pesanschema, 'Pesan');

