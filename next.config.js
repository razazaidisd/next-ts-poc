const withTM = require('@vercel/edge-functions-ui/transpile')();

module.exports = withTM({
  webpackDevMiddleware: config => {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
      return config
  },
})
