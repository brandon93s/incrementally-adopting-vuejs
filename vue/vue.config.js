module.exports = {
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      /**
       * Remove HTML generation
       * https://cli.vuejs.org/guide/html-and-static-assets.html#disable-index-generation
       */
      config.plugins.delete('preload')
      config.plugins.delete('prefetch')
      config.plugins.delete('html')

      /**
       * Add manifest generation
       */
      config
        .plugin('manifest')
        .use(require('webpack-manifest-plugin'), [{
        // Minimum Viable Manifest - contains only files essential to run app
          filter: asset => asset.isInitial && !asset.path.endsWith('.map')
        }])
    }
  }
}
