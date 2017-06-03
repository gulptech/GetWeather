var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About Us</h1>
      <p>Here are some links for you to look at.</p>
      <ul>
        <li><Link to="https://facebook.github.io/react">ReactJS</Link></li>
        <li><Link to="http://foundation.zurb.com">Foundation</Link></li>
        <li><Link to="https://www.openweathermap.org">Open Weather Map</Link></li>
        <li><Link to="https://github.com/gulptech/GetWeather">Get Weather Git Repo</Link></li>
      </ul>
    </div>
  )
};;
module.exports = About;
