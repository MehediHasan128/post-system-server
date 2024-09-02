import { ErrorRequestHandler } from "express";

const globalErrorHandler : ErrorRequestHandler = (err, req, res, next) => {
    let statusCode = 500;
    let message = 'Something went wrong'

    return res.status(statusCode).json({
        success : false,
        message
    })
}

export default globalErrorHandler;