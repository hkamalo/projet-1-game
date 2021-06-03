module.exports = {
    plugins: [
      // eslint-disable-next-line
      require('posthtml-include')({
        root: __dirname,
      }),
    ],
  };