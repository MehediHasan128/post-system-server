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
        message : `${(resData === 'Stock Out')? 'This product is Stock out' : 'Product add to sales'}`,
        data : resData
    })
});


export const SalesController = {
    createSalesProduct
}