const path = require('path')
module.exports={
    publicPath : './',
    configureWebpack:{
            resolve:{
                alias: {
                    '@ant-design/icons/lib/dist$': path.resolve(__dirname,'./src/tmpicons.js')  // 自建的文件的相对路径
                }
            }
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://acquacap.com/acquacap', //对应自己的接口
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
