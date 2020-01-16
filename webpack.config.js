const path = require('path'); //引入Node.js下面的模块
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装


module.exports = {
    mode: "development",
    entry: "./src/script/main.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "script/bundle.js"
    },
    module: {
        rules: [{
                //加载jquery
                test: require.resolve('jquery'),
                use: [{
                        loader: 'expose-loader',
                        options: '$'
                    },
                    {
                        loader: 'expose-loader',
                        options: 'jQuery'
                    }
                ]
            },
            { //加载css
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            { //配置图片文件的包
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                }
            }
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '国美',
            filename: "index.html",
            template: "./src/index1.html",
            chunks: ["index", "vendor"],
            minify: { //压缩html
                removeComment: true, //去掉注释
                collapseWhitespace: true //去掉空格。
            }
        }),
        new HtmlWebpackPlugin({
            title: '国美商品详情页',
            filename: "details.html",
            template: "./src/details.html",
            chunks: ["details", "vendor"],
            minify: { //压缩html
                removeComment: true, //去掉注释
                collapseWhitespace: true //去掉空格。
            }
        }),
        new HtmlWebpackPlugin({
            title: '国美购物车展示列表',
            filename: "cartlist.html",
            template: "./src/cartlist.html",
            chunks: ["cartlist", "vendor"],
            minify: { //压缩html
                removeComment: true, //去掉注释
                collapseWhitespace: true //去掉空格。
            }
        }),
        new HtmlWebpackPlugin({
            title: '用户注册',
            filename: "registry.html",
            template: "./src/registry.html",
            chunks: ["index", "vendor"],
            minify: { //压缩html
                removeComment: true, //去掉注释
                collapseWhitespace: true //去掉空格。
            }
        }),
        new HtmlWebpackPlugin({
            title: '用户登录',
            filename: "login.html",
            template: "./src/login.html",
            chunks: ["index", "vendor"],
            minify: { //压缩html
                removeComment: true, //去掉注释
                collapseWhitespace: true //去掉空格。
            }
        })
    ]
}