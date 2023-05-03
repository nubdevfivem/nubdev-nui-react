/* All Config By NUBDev */
/* created on 2020 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const buildPath = path.join(__dirname, '../build');
const CopyPlugin = require("copy-webpack-plugin");

const isDev = process.env.NODE_ENV == "development"
const assetsPath = '__nubdev__'

module.exports = {
  name: 'nubdev-fivem-react-client',
  entry: './src/index.tsx',
  output: {
    filename: isDev ? assetsPath+'/webpack/js/nubdev-[name].js' : assetsPath+'/webpack/js/nubdev-[name].[hash].js',
    path: buildPath,
    publicPath: "/",
    chunkFilename: 'nubdev-[name].chunk.[chunkhash].js',
  },
  optimization: {
    minimize: !isDev,
    splitChunks: { /*  การแยก modules ต่างๆ เพื่อให้ไฟล์ หลัก ไม่ใหญ่เกินไป*/
      cacheGroups: {
        reactVendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'react',
          chunks: 'all',
        },
        /*
          some_node_module: {
          test: /[\\/]node_modules[\\/]/,
          name: 'module_name',
          chunks: 'all',
        },
        */
      },
    },
    runtimeChunk: { /* เพิ่มประสิทธิภาพ การทำ Code snippet   */
      name: (entrypoint) => `runtime~${entrypoint.name}`,
    },
  },
  module: { /* loader ต่างๆ เอาๆง่ายๆ ก็คือ ตัวแปลภาษาไฟล์ต่างๆ  */
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        exclude: /node_modules/,
        use: 'babel-loader', /* Loader นี้จะเชื่อมต่อกับไฟล์ .babelrc  */
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,

          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: assetsPath+'/webpack/images/[name].[hash].[ext]',
              publicPath: './'
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
              name: assetsPath+'/webpack/images/[name].[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(wav|mp3)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 10000,
             
              name: assetsPath+'/webpack/sounds/[name].[ext]',
              publicPath: './',
            },
          },
        ],
      },
    ],
  },
  resolve: { 
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [ // Plguin ต่างๆ
    new HtmlWebpackPlugin({ // สำหรับ ฉีดไฟล์ ต่างๆ ที่ compile เสร็จ เข้า ./static/index.html => ./build/index.html
      template: './static/index.html',
      filename: './index.html',
      inject: false,
      publicPath: "./",
    }),
    new MiniCssExtractPlugin({ // สำหรับ ยก ไฟล์ css,scss,... ที่ compile เสร็จ แยกจาก folder หลัก
        filename: assetsPath+'/webpack/css/[name].[hash].css',
    }),

    // new CopyPlugin({ // สำหรับ copy ไฟล์ ที่ตัว loader ไม่รองรับ
    //   patterns: [
    //      { from: "./src/a", to: "./__nubdev__/webpack/a" },
    //      { from: "./src/b", to: "./__nubdev__/webpack/b" },
    //   ],
    // }),
  ],
  devServer: { 
    historyApiFallback: { index: "/", disableDotRule: true },
    devMiddleware: {
      writeToDisk: true, /* ตัวนี้คือตัว เด็ด compile โค้ดเส็จ จะ build folder ออกมาให้เลย ไม่ต้องใช้คำสั่ง npm or yarn run build*/
    }
  }
};
