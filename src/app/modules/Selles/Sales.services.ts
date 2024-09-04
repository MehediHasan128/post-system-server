import { Products } from '../Products/Product.model';
import { TSaleProduct } from './Sales.interface';
import { Sales } from './Sales.model';

const addSalesProductIntoDB = async (payload: TSaleProduct) => {
  const remainingProduct = await Products.findById(payload.productId);

  // Calculate the remaining product
  const remainigQuantity = remainingProduct!.productQuantity - payload.quantity;

  // if remaining product is not equal 0 then create add sales product into DB
  if (remainingProduct!.productQuantity !== 0) {


    // Get update quantity of this product
    const updatedQuantity = await Products.findByIdAndUpdate(
      payload.productId,
      { productQuantity: remainigQuantity },
      { new: true },
    );


    // if quantity is 0 the update the stock
    if (updatedQuantity?.productQuantity === 0) {
      await Products.findByIdAndUpdate(
        payload.productId,
        { stock: 'stock out' },
        { new: true },
      );
    }


    // Find the existing product from sales collection
    const existingProduct = await Sales.findOne({
      date: payload?.date,
      productId: payload?.productId,
    });


    // if product is existing to sales collection the upadte the sales product total quantity and total price
    if (existingProduct) {

      // Get product initial quantity and calculate the total quantity
      const initialQuantity = existingProduct!.quantity;
      const totalQuantity = initialQuantity + payload.quantity;

      // Get product initial price and calculate the total price
      const initialPrice = existingProduct!.price;
      const totalPrice = (Number(initialPrice) + Number(payload.price)).toFixed(
        2,
      );

      // Update product using total quantity and total price
      await Sales.findOneAndUpdate(
        { productId: payload.productId, date: payload.date },
        {
          quantity: totalQuantity,
          price: totalPrice,
        },
        { new: true },
      );

    }

    // Create product into sales collection
    const result = await Sales.create(payload);
    return result;
  }
};

const getAllSaleProductFromDB = async() => {
  const result = await Sales.find();
  return result
}

export const SalesService = {
  addSalesProductIntoDB,
  getAllSaleProductFromDB
};
