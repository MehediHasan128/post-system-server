import { TBranch } from "./Branch.interface";
import { Branches } from "./Branch.model";

const createBranchIntoDB = async(payload : TBranch) => {
    const result = await Branches.create(payload);
    return result;
}

export const BrancheService = {
    createBranchIntoDB
}