import { model, Schema } from "mongoose";
import { TSaleProduct } from "./Sales.interface";

const createSalesProductSchema = new Schema<TSaleProduct>({
    branchId: {
        type: String,
        required: true,
      },
      productId: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: [ true, 'Product name is required' ],
      },
      date: {
        type: String, 
        required: true,
      },
      quantity: {
        type: Number,
        required: [ true, 'Product quantity is required' ],
      },
      price: {
        type: Number,
        required: true,
      },
      tax: {
        type: Number,
        required: true,
      },
});

export const Sales = model<TSaleProduct>('Sales', createSalesProductSchema)