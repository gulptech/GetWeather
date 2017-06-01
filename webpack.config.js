module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      App: 'src/App.js',
      Nav: 'src/components/Nav.js',
      Weather: 'src/components/Weather.js',
      About: 'src/components/About.js',
      Examples: 'src/components/Examples.js',
      WeatherForm: 'src/components/WeatherForm.js',
      WeatherMessage: 'src/components/WeatherMessage.js',
      openWeatherMap: 'src/utils/openWeatherMap.js',
    },
    extensions: [ '', '.js', '.jsx' ]
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'inline-module-eval-source-map'
}
