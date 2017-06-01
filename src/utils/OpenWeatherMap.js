var Axios = require('axios');

const APIKEY = '5eab302c77eef87effcb66ac00a88c14';
var city = "Deep River, CT"
const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=${APIKEY}`;

module.exports = {
  getTemp: function (location) {
    let encodedLocation = encodeURIComponent(location);
    let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

  return Axios.get(requestUrl).then(function(res) {
    //console.log(res);
      return res.data.main.temp;
    }).catch(function(err) {
      throw new Error(err);
    });
  }
}
