import  express  from "express";
import {
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductById,

} from "../controllers/Products.js";


import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

cloudinary.config({
    cloud_name: 'dxkker0mf',
    api_key: '319942613824945',
    api_secret: 'kiNHdZNe8x8vxuwhaitjq-cEXkM'
  });
  
  
  const storage = new CloudinaryStorage({
      cloudinary: cloudinary,
      params: {
          folder: 'portofolio',
          format: async (req, file) => 'png',
          transformation: [{ width: 500, height: 500, crop: 'limit' }]
      }
  });

const upload = multer({ storage: storage });

const router = express.Router();

router.get('/product',getProduct);
router.post('/product', upload.single('gambar'), createProduct);
router.get('/product/:id', getProductById);
router.patch('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);



export default router; 