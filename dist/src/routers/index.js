"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeApiRoutes = void 0;
const module_routers_1 = require("./module-routers");
const configs_1 = require("../configs");
const types_1 = require("../types");
const routesConfig = [
    {
        uri: "/system",
        router: module_routers_1.SystemRouter,
    },
    {
        uri: "/auth",
        router: module_routers_1.AuthRouter,
    },
];
const printRouteRoutes = (route) => {
    const uriModule = route.uri.replace("/", "").toUpperCase();
    console.log("--------------------------------------------------------------------------------------");
    console.log(`${uriModule} Routes \n---------------`);
    route.router.stack.forEach((stack) => {
        if (stack.route) {
            // @ts-ignore
            const methods = Object.keys(stack.route?.methods).join(", ").toUpperCase();
            console.log(`${methods} ${stack.route.path}`);
        }
    });
    console.log("--------------------------------------------------------------------------------------");
};
const initializeApiRoutes = (app, apiPrefix = "/api") => {
    routesConfig.forEach((route) => {
        const uri = apiPrefix.concat(route.uri);
        app.use(uri, route.router);
        if (configs_1.SETTINGS.checkCurrentEnvironment(types_1.AppEnvironments.DEV)) {
            // printRouteRoutes(route);
        }
    });
};
exports.initializeApiRoutes = initializeApiRoutes;
