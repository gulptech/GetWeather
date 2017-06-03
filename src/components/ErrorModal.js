var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

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
    var modalMarkup = (
      <div className="tiny reveal text-center" id="error-modal" data-reveal="">
        <h4>{this.props.title}</h4>
        <p>{this.props.message}</p>
        <p>
          <button className="button hollow close-button" data-close="" >
            Okay
          </button>
        </p>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));

    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function () {
    return  (
      <div></div>
    )
  }
});

module.exports = ErrorModal;
