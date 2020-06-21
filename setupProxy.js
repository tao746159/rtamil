const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(proxy('/users', {
      target: 'http:/localhost:3002',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/users": "/users"
      }
    }))
}