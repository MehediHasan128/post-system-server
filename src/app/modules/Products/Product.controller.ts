import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponce from "../../utils/sendResponce";
import { ProductService } from "./Product.services";

const createProduct = catchAsync(async(req, res) => {
    const productData = req.body;

    const resData = await ProductService.createProductIntoDB(productData);

    sendResponce(res, {
        statusCode : httpStatus.OK,
        success : true,
        message : 'Product is created',
        data : resData
    })
});


export const ProductController = {
    createProduct
}