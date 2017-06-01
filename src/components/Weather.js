var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var CurrentWeather = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false,
      errorMsg: false
    }
  },
  handleSearch: function(location) {
    var that = this;
    delete this.state.location;
    delete this.state.temp;
    this.setState({isLoading: true, errorMsg: false});

    CurrentWeather.getTemp(location).then(function(temp) {
      setTimeout(function() {that.setState({location, temp, isLoading: false, errorMsg: false});}, 1000);
    }).catch(function(err) {
      setTimeout(function() {that.setState({isLoading: false, errorMsg: true});}, 1000);
    });

  },
  render: function() {
    var {isLoading, temp, location, errorMsg} = this.state;

    let renderMessage = (isLoading)? <h3>Loading...</h3> : (temp && location)? <WeatherMessage temp={temp} location={location} />: (this.state.errorMsg) ? <h3>City Not Found</h3> : '';

    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage}
      </div>

    );
  }
});

module.exports = Weather;
