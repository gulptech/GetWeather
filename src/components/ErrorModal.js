var React = require('react');

var ErrorModal = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Error'
    }
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function() {
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function () {
    return (
      <div className="tiny reveal text-center" id="error-modal" data-reveal="">
        <h4>{this.props.title}</h4>
        <p className="lead">{this.props.message}</p>
        <p><button className="button hollow close-button" data-close="" aria-label="Close modal" type="button"><span aria-hidden="true">Okay</span></button></p>
      </div>
    )
  }
});

module.exports = ErrorModal;
