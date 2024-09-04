import express from 'express';
import { SalesController } from './Sales.controller';

const router = express.Router();

router.post('/create-sales', SalesController.createSalesProduct)
router.get('/sales-product', SalesController.getAllSalesProduct)

export const SalesRouter = router;