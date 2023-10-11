import { fileURLToPath, URL } from "url";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  }
})
