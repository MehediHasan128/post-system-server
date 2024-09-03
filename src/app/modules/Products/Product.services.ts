import { TProduct } from "./Product.interface";
import { Products } from "./Product.model";

const createProductIntoDB = async(payload : TProduct) => {
    const result = await Products.create(payload);
    return result;
};

const getProductsByBranchId = async(id : string) => {
    const result = await Products.find({branchId : id})
    return result;
}

export const ProductService = {
    createProductIntoDB,
    getProductsByBranchId
}