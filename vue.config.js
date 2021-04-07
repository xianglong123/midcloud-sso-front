// module.exports = {
//     outputDir: 'docs',
//     publicPath: process.env.NODE_ENV === 'production'
//         ? '/Vue-Access-Control/'
//         : '/',
//     productionSourceMap: false,
//     devServer: {
//         disableHostCheck: true,
//         host: '0.0.0.0',
//         port: 80,
//         // 配置跨域代理
//         proxy: {
//             '/api': {
//                 target: 'http://localhost:8081',//后端接口地址
//                 changeOrigin: true,//是否允许跨越
//                 pathRewrite: {
//                     '^/api': '',//重写,
//                 }
//             }
//         }
//     }
// }

'use strict'
module.exports = {
    outputDir: 'dist',
    publicPath: '/',
    assetsDir: 'static',
    productionSourceMap: false,
    devServer: {
        disableHostCheck: true,
        host: '0.0.0.0',
        port: 8090,
        // 配置跨域代理
        proxy: {
            '/api': {
                target: 'http://localhost:8091',//后端接口地址
                changeOrigin: true,//是否允许跨越
                pathRewrite: {
                    '^/api': '',//重写,
                }
            }
        }
    }
};




