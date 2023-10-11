const { fileURLToPath, URL } = require('url');
const { createRequire } = require('module');

const require = createRequire(import.meta.url);

module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
};
