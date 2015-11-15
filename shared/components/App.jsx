import React, { PropTypes, Component } from 'react'

class App extends Component {
  buttonClicked(event) {
    alert('client side is working')
  }

  render() {
    return (
      <div>
        <h1>This is the App component</h1>
        <p>Foo is `{this.props.foo}`</p>
        <button onClick={this.buttonClicked}>Click me to test client-side</button>
      </div>
    )
  }
}

// As CommonJS isn't 100% compatible with ES6 modules, we have to
// fallback to using module.exports, otherwise the consumer
// would need to write `require('./App').default`
module.exports = exports = App
