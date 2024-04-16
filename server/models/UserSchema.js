import mongoose, { Schema, mongo } from "mongoose";
import { v4 as uuidv4 } from 'uuid';


const barangSchema = new Schema({
    uuid: {type:String, default:()=> uuidv4(), required:true, unique:true},
    judul: String,
    responsive: { type: String, default: null },
    link: {type: String , default: null},
    teknologi: {type: String, default: null},
    framework: { type: String, default: null },
    other: { type: String, default: null },
    keterangan: { type: String, default: null },
    gambar: { type: String, default: null },
    waktu: { type: Date, default: Date.now },
    kategoriid: { type: String,  default: null, ref: 'Kategori' } // Menambahkan field userId sebagai foreign key
});

export const BarangModel = mongoose.model('Barang', barangSchema, 'Barang');


const kategoriSchema = new Schema({
    uuid: {type:String, default:()=> uuidv4(), required:true, unique:true},
    judul: String,
    keterangan: { type: String, default: null },
    gambar: Number,
    waktu: { type: Date, default: Date.now },
    
});

export const KategoriModel = mongoose.model('Kategori', kategoriSchema, 'Kategori');

