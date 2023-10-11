const { fileURLToPath, URL } = require('url');

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
