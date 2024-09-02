import { TProduct } from "./Product.interface";
import { Products } from "./Product.model";

const createProductIntoDB = async(payload : TProduct) => {
    const result = await Products.create(payload);
    return result;
};

export const ProductService = {
    createProductIntoDB
}