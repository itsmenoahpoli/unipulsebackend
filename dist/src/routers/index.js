"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeApiRoutes = void 0;
const module_routers_1 = require("./module-routers");
const configs_1 = require("../configs");
const types_1 = require("../types");
const routesConfig = [
    {
        uri: "/system",
        router: new module_routers_1.SystemRouter().routerRoutes,
    },
    {
        uri: "/auth",
        router: new module_routers_1.AuthRouter().routerRoutes,
    },
    {
        uri: "/user-roles",
        router: new module_routers_1.UserRolesRouter().routerRoutes,
    },
];
const printRouteRoutes = (route) => {
    const uriModule = route.uri.replace("/", "").toUpperCase();
    console.log("--------------------------------------------------------------------------------------");
    console.log(`${uriModule} ${route.uri} Routes \n---------------`);
    route.router.stack.forEach((stack) => {
        if (stack.route) {
            // @ts-ignore
            const methods = Object.keys(stack.route?.methods).join(", ").toUpperCase();
            console.log(`${methods} ${route.uri}${stack.route.path}`);
        }
    });
    console.log("--------------------------------------------------------------------------------------");
};
const initializeApiRoutes = (app, apiPrefix = "/api/v1") => {
    routesConfig.forEach((route) => {
        const uri = apiPrefix.concat(route.uri);
        app.use(uri, route.router);
        if (configs_1.SETTINGS.checkCurrentEnvironment(types_1.AppEnvironments.DEV)) {
            printRouteRoutes(route);
        }
    });
};
exports.initializeApiRoutes = initializeApiRoutes;
