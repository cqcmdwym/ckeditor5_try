const path = require('path');
const { styles } = require('@ckeditor/ckeditor5-dev-utils');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // https://webpack.js.org/configuration/entry-context/
  entry: './src/app.js',

  // https://webpack.js.org/configuration/output/
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  plugins: [
    new ExtractTextPlugin('styles.css')
  ],

  module: {
    rules: [
      {
        // Or /ckeditor5-[^/]+\/theme\/icons\/[^/]+\.svg$/ if you want to limit this loader
        // to CKEditor 5's icons only.
        test: /\.svg$/,

        use: ['raw-loader']
      },
      {
        test:/\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              singleton: true
            }
          },
          {
            loader: 'postcss-loader',
            options: styles.getPostCssConfig({
              themeImporter: {
                themePath: require.resolve('@ckeditor/ckeditor5-theme-lark')
              },
              minify: true
            })
          },
        ]
      },
      // {
      //   // Or /ckeditor5-[^/]+\/theme\/[^/]+\.css$/ if you want to limit this loader
      //   // to CKEditor 5's theme only.
      //   test: /\.scss$/,
      //   use: [
      //     {
      //       loader: 'style-loader',
      //       options: {
      //         singleton: true
      //       }
      //     },
      //     {
      //       loader: 'postcss-loader',
      //       options: styles.getPostCssConfig({
      //         themeImporter: {
      //           themePath: require.resolve('@ckeditor/ckeditor5-theme-lark')
      //         },
      //         minify: true
      //       })
      //     },
      //     {
      //       loader: 'sass-loader',
      //       // options: {
      //       //   sourceMap: true
      //       // }
      //     },
      //   ]
      // }
    ]
  },

  // Useful for debugging.
  devtool: 'source-map'
};