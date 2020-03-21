const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [
  {
    // Electron Main
    mode: 'development',
    entry: path.resolve(__dirname, 'src/electron/index.ts'),
    target: 'electron-main',
    output: {
      path: path.resolve(__dirname, 'dist/electron'),
      filename: 'index.js'
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          include: [ path.resolve(__dirname, 'src/electron') ],
          use: [ { loader: 'ts-loader' } ]
        }
      ]
    }
  },
  {
    // Electron Renderer
    mode: 'development',
    entry: path.resolve(__dirname, 'src/react/index.tsx'),
    target: 'electron-renderer',
    output: {
      path: path.resolve(__dirname, 'dist/react'),
      filename: 'index.js'
    },
    devtool: 'source-map',
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
        filename: path.resolve(__dirname, 'dist/index.html')
      })
    ],
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          include: [ path.resolve(__dirname, 'src/react') ],
          use: [ { loader: 'ts-loader' } ]
        }
      ]
    }
  }
]