const proxy = require('http-proxy-middleware')
module.exports = function(app) {
    app.use(proxy('/myapi', { 
        target: 'https://job.alibaba.com/' ,
        changeOrigin: true,
        pathRewrite: {
        "^/myapi": "/"
        }
    }))
}