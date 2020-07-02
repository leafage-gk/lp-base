const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/')
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/scss/settings.scss";'
      },
      css: {
        sourceMap: process.env.NODE_ENV !== 'production'
      }
    }
  },
  publicPath: './'
}
