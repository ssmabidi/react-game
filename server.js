const webpack = require('webpack')
const Express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config')

const app = new Express()
const port = 3000

const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))


app.get("*", function(req, res) {
  res.sendFile(__dirname + '/src/index.html')
})

app.listen(port, function(error) {
  error ? console.error(error) : console.info("Listening on port " + port + ".");
})