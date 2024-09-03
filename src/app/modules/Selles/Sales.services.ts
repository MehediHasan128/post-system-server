import { Products } from '../Products/Product.model';
import { TSaleProduct } from './Sales.interface';
import { Sales } from './Sales.model';

const addSalesProductIntoDB = async (payload: TSaleProduct) => {

  const remainingProduct = await Products.findById(payload.productId)
  const remainigQuantity = remainingProduct!.productQuantity - payload.quantity
  
  if(remainingProduct!.productQuantity !== 0){

    await Products.findByIdAndUpdate(payload.productId, {productQuantity : remainigQuantity}, {new : true})

    const existingProduct = await Sales.findOne({
      date: payload?.date,
      productId: payload?.productId,
    });
  
    if (existingProduct) {
  
      const initialQuantity = existingProduct!.quantity;
      const totalQuantity = initialQuantity + payload.quantity;
  
      const initialPrice = existingProduct!.price;
      const totalPrice = (Number(initialPrice) + Number(payload.price)).toFixed(
        2,
      );
  
      const updateProduct = await Sales.findOneAndUpdate(
        { productId: payload.productId, date: payload.date },
        {
          quantity: totalQuantity,
          price: totalPrice,
        },
        { new: true },
      );
      return updateProduct;
    }
  

    await Products.findByIdAndUpdate(payload.productId, {productQuantity : remainigQuantity}, {new : true})

    const result = await Sales.create(payload);
      return result

  }else{
    const message = 'Stock Out'
    return message;
  }
};

export const SalesService = {
  addSalesProductIntoDB,
};
