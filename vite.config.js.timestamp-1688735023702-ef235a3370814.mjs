// vite.config.js
import { defineConfig } from "file:///D:/Projects/TestProjects/leetcodeclone/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Projects/TestProjects/leetcodeclone/node_modules/@vitejs/plugin-react/dist/index.mjs";
var prefix = `monaco-editor/esm/vs`;
var vite_config_default = defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      `${prefix}/language/json/json.worker`,
      `${prefix}/language/css/css.worker`,
      `${prefix}/language/html/html.worker`,
      `${prefix}/language/typescript/ts.worker`,
      `${prefix}/editor/editor.worker`
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9qZWN0c1xcXFxUZXN0UHJvamVjdHNcXFxcbGVldGNvZGVjbG9uZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcUHJvamVjdHNcXFxcVGVzdFByb2plY3RzXFxcXGxlZXRjb2RlY2xvbmVcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1Byb2plY3RzL1Rlc3RQcm9qZWN0cy9sZWV0Y29kZWNsb25lL3ZpdGUuY29uZmlnLmpzXCI7LyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcclxuY29uc3QgcHJlZml4ID0gYG1vbmFjby1lZGl0b3IvZXNtL3ZzYDtcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgICBwbHVnaW5zOiBbcmVhY3QoKV0sXHJcbiAgICBvcHRpbWl6ZURlcHM6IHtcclxuICAgICAgICBpbmNsdWRlOiBbXHJcbiAgICAgICAgICAgIGAke3ByZWZpeH0vbGFuZ3VhZ2UvanNvbi9qc29uLndvcmtlcmAsXHJcbiAgICAgICAgICAgIGAke3ByZWZpeH0vbGFuZ3VhZ2UvY3NzL2Nzcy53b3JrZXJgLFxyXG4gICAgICAgICAgICBgJHtwcmVmaXh9L2xhbmd1YWdlL2h0bWwvaHRtbC53b3JrZXJgLFxyXG4gICAgICAgICAgICBgJHtwcmVmaXh9L2xhbmd1YWdlL3R5cGVzY3JpcHQvdHMud29ya2VyYCxcclxuICAgICAgICAgICAgYCR7cHJlZml4fS9lZGl0b3IvZWRpdG9yLndvcmtlcmAsXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBRUEsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBQ2xCLElBQU0sU0FBUztBQUdmLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixjQUFjO0FBQUEsSUFDVixTQUFTO0FBQUEsTUFDTCxHQUFHLE1BQU07QUFBQSxNQUNULEdBQUcsTUFBTTtBQUFBLE1BQ1QsR0FBRyxNQUFNO0FBQUEsTUFDVCxHQUFHLE1BQU07QUFBQSxNQUNULEdBQUcsTUFBTTtBQUFBLElBQ2I7QUFBQSxFQUNKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K