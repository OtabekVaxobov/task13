import { routesInit } from './router.core';
import { SIGNUP_ROUTE_PATH, SignupRouter } from "../../core/signup";
export const routes = {
    [SIGNUP_ROUTE_PATH]: SignupRouter,
};

export const Router = routesInit(routes);
