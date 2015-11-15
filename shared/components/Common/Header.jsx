import React, { Component } from 'react'

class Header extends Component {
  constructor(props) {
    super(props)
    this.title = this.props.title || 'react-blog'
    this.subtitle = this.props.subtitle || 'an experimental blog'
  }

  render() {
    return (
      <header>
        <h1><a href="/">{this.title}</a></h1>
        <p>{this.subtitle}</p>
      </header>
    )
  }
}

module.exports = exports = Header
