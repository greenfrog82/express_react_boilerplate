import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import config from './../webpack.dev.config.js';

const compiler = webpack(config);
const devServer = new WebpackDevServer(compiler, config.devServer);
devServer.listen(config.devServer.port, () => {
  console.log('webpack-dev-server is listening on port', config.devServer.port);
});
