import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponce from "../../utils/sendResponce";
import { SalesService } from "./Sales.services";

const createSalesProduct = catchAsync(async(req, res) => {
    const salesData = req.body;

    const resData = await SalesService.addSalesProductIntoDB(salesData);

    sendResponce(res, {
        statusCode : httpStatus.OK,
        success : true,
        message : 'Product add to sales',
        data : resData
    })
});


const getAllSalesProduct = catchAsync(async(req, res) => {
    const resData = await SalesService.getAllSaleProductFromDB();

    sendResponce(res, {
        statusCode : httpStatus.OK,
        success : true,
        message : 'Gell all sales product',
        data : resData
    })
})


export const SalesController = {
    createSalesProduct,
    getAllSalesProduct
}