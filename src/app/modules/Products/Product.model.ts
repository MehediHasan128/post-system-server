import { model, Schema } from 'mongoose';
import { TProduct } from './Product.interface';

const createProductSchema = new Schema<TProduct>(
  {
    branchId: {
      type: String,
      required: [true, 'Please provide branch name'],
    },
    productName: {
      type: String,
      required: [true, 'Please your product name'],
    },
    productType: {
      type: String,
      required: [true, 'Product type is required'],
    },
    productQuantity: {
      type: Number,
      required: [true, 'Please provide your product quantity'],
    },
    buyingPrice: {
      type: Number,
      required: [true, 'Please provide your product buying price'],
    },
    sellingPrice: {
      type: Number,
      required: [true, 'Please provide your product selling price'],
    },
    discount: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
);

export const Products = model<TProduct>('Product', createProductSchema);
