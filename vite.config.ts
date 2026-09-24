import {reactRouter} from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import {defineConfig} from "vite";

export default defineConfig({
    plugins: [tailwindcss(), reactRouter()],
    resolve: {
        tsconfigPaths: true,
    },
    server: {
        port: 9959,
        proxy: {
            '/songsaurus': {
                target: 'http://localhost:9191/api/'
            },
        }
    }
});
