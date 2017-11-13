
const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const serialize = require('serialize-javascript')
const { createBundleRenderer } = require('vue-server-renderer')

const isProd = typeof process.env.NODE_ENV !== 'undefined' && (process.env.NODE_ENV === 'production')
let renderer

const indexHTML = (() => {
  return fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8')
})()

if (isProd) {
  app.use('/', express.static(path.resolve(__dirname, './dist')))
} else {
  app.use('/dist', express.static(path.resolve(__dirname, './dist')))
}

if (isProd) {
  const bundlePath = path.resolve(__dirname, './dist/server/main.js')
  renderer = createBundleRenderer(fs.readFileSync(bundlePath, 'utf-8'))
} else {
  require('./build/dev-server')(app, bundle => {
    renderer = createBundleRenderer(bundle)
  })
}

app.get('*', (request, response) => {
  const context = { url: request.url }
  renderer.renderToString(context, (error, html) => {
    if (error) {
      return response.status(500).send('Server Error')
    }
    html = indexHTML.replace('{{ APP }}', html)
    html = html.replace('{{ STATE }}', `<script>window.__INITIAL_STATE__=${serialize(context.initialState, { isJSON: true })}</script>`)
    response.write(html)
    response.end()
  })
})

const port = process.env.port || 3001
app.listen(port, () => {
  console.log(`Server started at port: ${port}`)
})
