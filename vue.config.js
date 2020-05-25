const { execSync } = require('child_process')

module.exports = {
  transpileDependencies: ['vuetify'],
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'test') {
      execSync(
        "sed -i '' 's/source: pathutils.relativeTo(start.source, origFile),/source: origFile,/' node_modules/istanbul-lib-source-maps/lib/get-mapping.js"
      )

      config.devtool('cheap-module-eval-source-map')
      config.module
        .rule('js')
        .test(/\.js$/)
        .use('istanbul-instrumenter-loader')
        .loader('istanbul-instrumenter-loader')
        .before('babel-loader')
        .options({
          esModules: true
        })
    }
  }
}
