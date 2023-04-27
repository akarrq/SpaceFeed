import { resolve } from "path";

const root = resolve(__dirname, "src");

export default {
  base: "/SpaceFeed/",
  root,
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        library: resolve(root, "library.html"),
      },
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
};
