import { Router } from "express";
import { ProductRouter } from "../modules/Products/Product.route";
import { BranchRouter } from "../modules/Branch/Branch.route";
import { SalesRouter } from "../modules/Selles/Sales.route";

const router = Router();

const modulesRoute = [
    {
        path : '/products',
        route : ProductRouter
    },
    {
        path : '/branch',
        route : BranchRouter
    },
    {
        path : '/sales',
        route : SalesRouter
    },
];

modulesRoute.forEach((route) => router.use(route.path, route.route));

export default router;