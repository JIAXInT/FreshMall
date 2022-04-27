module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
    },
    // publicPath: '/mi-mall-static/',
    // outputDir:'dist',
    // indexPath:'index2.html',
    lintOnSave: false,
    productionSourceMap: true,
    chainWebpack: (config) => {
        config.plugins.delete('prefetch');
    }
}