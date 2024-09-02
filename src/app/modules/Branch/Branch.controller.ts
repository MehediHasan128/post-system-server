import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponce from "../../utils/sendResponce";
import { BrancheService } from "./Branch.services";

const createBranch = catchAsync(async(req, res) => {
    const branchData = req.body;

    const resData = await BrancheService.createBranchIntoDB(branchData);

    sendResponce(res, {
        statusCode : httpStatus.OK,
        success : true,
        message : 'Branch is created',
        data : resData
    })
});

export const BranchController = {
    createBranch
}