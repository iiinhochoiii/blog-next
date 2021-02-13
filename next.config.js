const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  target: "serverless",
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif|ico)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 1000000,
          name: '[name].[ext]'
        }
      }
    })
    return config
  },
});
