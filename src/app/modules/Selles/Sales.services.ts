import { Products } from "../Products/Product.model";
import { TSaleProduct } from "./Sales.interface";
import { Sales } from "./Sales.model";

// const addSalesProductIntoDB = async(payload : TSaleProduct) => {

//     const product = await Products.findById(payload.productId, {productQuantity : 1});

//     const updatedQuantity = product!.productQuantity - payload.quantity

//     console.log(updatedQuantity);

//     // const result = await Sales.create(payload);
//     // return result
// }

// export const SalesService = {
//     addSalesProductIntoDB
// }