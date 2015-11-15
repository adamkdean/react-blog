import React, { Component } from 'react'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.content = this.props.children || '&copy; 2015 Adam K Dean, this is an example footer.'
  }

  render() {
    return (
      <footer>
        <p dangerouslySetInnerHTML={{__html: this.content}}></p>
      </footer>
    )
  }
}

module.exports = exports = Footer
