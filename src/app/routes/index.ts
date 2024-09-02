import { Router } from "express";
import { ProductRouter } from "../modules/Products/Product.route";
import { BranchRouter } from "../modules/Branch/Branch.route";

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
];

modulesRoute.forEach((route) => router.use(route.path, route.route));

export default router;