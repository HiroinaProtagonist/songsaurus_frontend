import {type RouteConfig, index, route, layout} from "@react-router/dev/routes";

export default [
    index("routes/search.tsx"),

    route("generator", "routes/wordSearch.tsx"),

    route("login", "routes/login/login.tsx"),
    route("signup", "routes/login/signup.tsx"),

    route("forgot-password", "routes/login/forgot.tsx"),
    route("update-password", "routes/login/update.tsx"),

    layout("routes/layouts/protected.tsx", [
        route("dashboard", "routes/dashboard.tsx"),
    ]),

] satisfies RouteConfig;
