import { model, Schema } from "mongoose";
import { TBranch } from "./Branch.interface";

const createBranchSchema = new Schema<TBranch>({
    branchName : {
        type : String,
        required : [ true, 'Please provide branch name' ]
    },
    branchLocation : {
        type : String,
        required : [ true, 'Please provide branch location' ]
    },
    monthlyRent : {
        type : Number,
        required : [ true, 'Please provide monthly rent of this branch' ]
    },
    stafSalary : {
        type : Number,
        required : [ true, 'Please provide staf salary' ]
    }
});


export const Branches = model<TBranch>('Branch', createBranchSchema)