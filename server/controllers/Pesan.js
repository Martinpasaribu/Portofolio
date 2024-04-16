import { PesanModel } from "../models/Pesan.js";


export const BuatPesan = async(req, res) =>{
    const {pesan, email} = req.body;
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    try {
        // const idku = ObjectId(req.userId)
        if(pattern.test(email)){
        await PesanModel.create({
                email: email,
                pesan: pesan,
            
        }); res.status(201).json({msg: "Pesan dibuat"});
    }
    res.status(501).json({msg: "Email tidak valid"});

    } catch (error) {

    }
}