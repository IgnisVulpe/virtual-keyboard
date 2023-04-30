console.log({ env: process.env.NODE_ENV });

const env = process.env.NODE_ENV || 'production';

module.exports = (
  env === 'production'
    ? require('./webpack.prod.config')
    : require('./webpack.dev.config')
);
