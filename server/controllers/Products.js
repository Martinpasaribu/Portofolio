import  { BarangModel, KategoriModel }  from "../models/UserSchema.js";

export const getProduct = async (req, res) => {
    try {
        let response;

            response = await BarangModel.find({})
            res.status(200).json(response);
        }

     catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const getpembeli = async (req,res) =>{
    const response =  await BarangModel.find({}
    );
    res.status(200).json(response);

}


export const createProduct = async(req, res) =>{
    const {judul, responsive, link, teknologi, framework, other, keterangan, kategoriid} = req.body;
    const gambar =req.file.path
    try {
        // const idku = ObjectId(req.userId)
        await BarangModel.create({
            judul: judul,
            responsive: responsive,
            link: link,
            teknologi:teknologi,
            framework:framework,
            other:other,
            gambar:gambar,
            keterangan:keterangan,
            kategoriid: kategoriid
        });
        res.status(201).json({msg: "Product Created Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}


export const getProductById = async (req, res) =>
{
    try {
        const product = await BarangModel.findOne({uuid: req.params.id});

        if(!product) return res.status(404).json({msg:" Data yang anda cari tidak ada"})

        let response;
            response = await BarangModel.findOne({_id : product._id})

        
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}




export const updateProduct = async(req, res) =>{
    try {
        const product = await BarangModel.findOne({ uuid: req.params.id });
        if(!product) return res.status(404).json({msg: "Data tidak ditemukan"}); 
        
        const {name, harga, merek, stok, keterangan, jenis} = req.body;

        if(req.role === "admin"){
            await BarangModel.updateOne({ _id: product._id},{name, harga, merek, stok, keterangan, jenis}); 

        }else{
            const id = req.userid
            const id2 = product.userid

            if(req.userid !== product.userid) return res.status(403).json({msg: "Akses terlarang cehk ",id,id2});
            await BarangModel.updateOne({_id: product._id , userid:req.userid} , {name, harga, merek, stok, keterangan, jenis});
        }
        res.status(200).json({msg: "Product updated successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}


export const deleteProduct = async (req, res) =>
{
    try {
        const product = await BarangModel.findOne({uuid: req.params.id});
        if(!product) return res.status(404).json({msg: "Data tidak ditemukan"});
        if(req.role === "admin"){
            await BarangModel.deleteOne({_id: product._id});
        }else{
            if(req.userid !== product.userid) return res.status(403).json({msg: "Akses terlarang"});
            await BarangModel.deleteOne({_id: product._id}, {userid: req.userid});
        }
        res.status(200).json({msg: "Product deleted successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

