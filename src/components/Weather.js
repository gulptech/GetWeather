var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var CurrentWeather = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

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
  componentDidMount: function() {
    var location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function(newProps) {
    var location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render: function() {
    var {isLoading, temp, location, errorMsg} = this.state;

    let renderMessage = (isLoading)? <h3 className="text-center">Fetching weather...</h3> : (temp && location)? <WeatherMessage temp={temp} location={location} />: (this.state.errorMsg) ? <ErrorModal title="Search Error" message="City Not Found"/> : '';

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage}
      </div>

    );
  }
});

module.exports = Weather;
