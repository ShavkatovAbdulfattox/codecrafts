/** @format */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const prefix = `monaco-editor/esm/vs`;

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    optimizeDeps: {
        include: [
            `${prefix}/language/json/json.worker`,
            `${prefix}/language/css/css.worker`,
            `${prefix}/language/html/html.worker`,
            `${prefix}/language/typescript/ts.worker`,
            `${prefix}/editor/editor.worker`,
        ],
    },
});
