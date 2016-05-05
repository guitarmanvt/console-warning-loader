// Thanks to: https://webpack.github.io/docs/how-to-write-a-loader.html
module.exports = function (source) {
  this.emitWarning('[warning-loader] WARNING: ' + this.request);
  return source;
};
