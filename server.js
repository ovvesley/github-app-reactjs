'use strict'

const webpack = require('webpack')

const WebpackDevServer = require('webpack-dev-server')

const config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
    
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {colors: true}
}).listen(3000, (error) =>{
    if (error)
        return console.warn(error)
    console.log('listening on http://localhost:3000')
})

