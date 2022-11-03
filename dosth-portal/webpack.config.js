const path = require('path') // 导入node.js中专门操作路径的模块
// 导入html插件
const HtmlPlugin = require('html-webpack-plugin')

const webpack = require('webpack')

const htmlPlugin = new HtmlPlugin({
    template: './src/index.html', // 指定原文件的存放路径
    filename: './index0.html' // 指定生成文件存放路径
})

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// 使用Node.js中导出语法,向外导出一个webpack的配置对象
module.exports = {
    // webpack运行模式, 可选值 development 和 production
    module: 'development',
    // 运行时行数与源码行数保持一致
  // devtool: 'eval-source-map',
    // 生产环境下,提示行数与源码行数一致,代码混淆
    devtool: 'nosources-source-map',
    entry: path.join(__dirname, './src/index.js'), // 打包入库文件的路径
    output: {
        path: path.join(__dirname, './dist'), // 输出文件的存放路径
        filename: 'js/bundle.js' // 输出文件的名称
    },
    plugins: [htmlPlugin, 
        new CleanWebpackPlugin(),
        new webpack.LoaderOptionsPlugin({
            // test: /\.xxx$/, // may apply this only for some modules
            options: {
                webPreferences: { nodeIntegration: true, contextIsolation: false }
            }
        })
    ], // 通过plugins节点,使htmlPlugin插件生效
    devServer: {
        open: true, // 首次打包成功后自动打开
        host: '127.0.0.1', // 指定运行主机地址
        port: 80 // 端口
    },
    module: {
        rules: [ // 文件后缀名规则
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.jpg|png|gif$/, use: {
                loader: 'url-loader',
                options: {
                    "limit": 22229,
                    "outputPath": "images"
                }
            }},
            // 使用babel-loader处理js高级语法
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/} 
        ]
    },
    resolve: {
        alias: {
            // @符号表示src路径
            '@': path.join(__dirname, './src/')
        }
    }
}