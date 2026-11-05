import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
    index("routes/search.tsx"),
    route("generator", "routes/wordSearch.tsx"),
    route("login", "routes/login.tsx"),
    route("signup", "routes/signup.tsx"),
    route("forgot-password", "routes/forgot.tsx"),
    route("update-password", "routes/update.tsx"),
    route("dashboard", "routes/dashboard.tsx")
] satisfies RouteConfig;
