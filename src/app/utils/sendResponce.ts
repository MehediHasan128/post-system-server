import { Response } from "express";
import httpStatus from "http-status";

type TResponce<T> = {
    statusCode : number;
    success : boolean;
    message ?: string;
    data : T
}

const sendResponce = <T>(res : Response, data : TResponce<T>) => {
    res.status(data?.statusCode).json({
        success : data?.success,
        message : data?.message,
        data : data?.data
    })
};

export default sendResponce;