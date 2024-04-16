import express from 'express';
import cors from "cors";

import dotenv from 'dotenv';
import ProductRoute from './routes/ProductRoute.js';
import Pesan from './routes/Pesan.js'

// setiap kita sudah memanggil koenkso maka database akan dibuat berdasarkan fieldnaya jadi jika ingin meperbaharui fiedlnya makan harus dihapus dulu 
import { Koneksi } from './config/MongoDB.js';

dotenv.config();

const app = express();

app.use(express.json());


app.set('trust proxy', 1)

app.use(cors({
    origin: ["", "https://www.postman.com", "http://localhost:3000","http://localhost:3001", "http://localhost:5000", "https://martin-pasaribu.vercel.app"],
    methods: ["POST", "GET", "PATCH", "DELETE",'PUT', "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
 }));


app.use(ProductRoute);
app.use(Pesan);



app.use('/', (req,res)=> {
    res.send(" Server Untuk Data Colection 2 Berjalan dengan Baik ")
})


app.listen(process.env.APP_PORT, ()=> {
    console.log('Server up and running...'+ process.env.APP_PORT);
});









