var React = require('react');
var Nav = require('Nav');

var App = (props) => {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  );
};

module.exports = App;
