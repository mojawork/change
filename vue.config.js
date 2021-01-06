module.exports = {
  lintOnSave: false,
  publicPath: './',
  devServer: {
    port: 3000,
    host: "0.0.0.0",
    disableHostCheck: true,
    https: false,
    hot: true,
    overlay: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
  }
};
