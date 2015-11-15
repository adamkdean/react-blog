const React = require('react');

module.exports = exports = React.createClass({
  displayName: 'App',
  buttonClicked: function (event) {
    alert('client-side react is working')
  },
  render: function () {
    const foo = this.props.foo && this.props.foo || 'not set'
    return (
      <div>
        <h1>This is the App component</h1>
        <p>foo `{foo}`.</p>
        <button onClick={this.buttonClicked}>Click me to test client-side</button>
      </div>
    )
  }
});
