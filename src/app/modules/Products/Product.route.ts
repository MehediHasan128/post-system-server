import express from 'express';
import { ProductController } from './Product.controller';

const router = express.Router();

router.post('/create-product', ProductController.createProduct)

export const ProductRouter = router;