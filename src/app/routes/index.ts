import { Router } from "express";
import { ProductRouter } from "../modules/Products/Product.route";

const router = Router();

const modulesRoute = [
    {
        path : '/products',
        route : ProductRouter
    }
];

modulesRoute.forEach((route) => router.use(route.path, route.route));

export default router;