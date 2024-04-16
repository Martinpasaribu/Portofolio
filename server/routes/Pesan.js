import  express  from "express";

import { BuatPesan } from "../controllers/Pesan.js";

const router = express.Router();

router.post('/pesan', BuatPesan)

export default router