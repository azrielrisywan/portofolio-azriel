const { fileURLToPath, URL } = require('url');
const { createRequire } = require('module');

const require = createRequire(import.meta.url);
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
});
