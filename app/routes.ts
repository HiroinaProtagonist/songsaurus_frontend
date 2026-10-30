import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("generator", "routes/generator.tsx"),
    route("login", "routes/login.tsx"),
    route("signup", "routes/signup.tsx"),
    route("dashboard", "routes/dashboard.tsx"),
    route("protected", "routes/protected.tsx")

] satisfies RouteConfig;
