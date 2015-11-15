import React, { PropTypes, Component } from 'react'

class Article extends Component {
  constructor(props) {
    super(props)
    this.title = this.props.title || 'No Title'
    this.content = this.props.children || 'No Content'
  }

  render() {
    return (
      <div className="article">
        <h2>{this.title}</h2>
        <div className="content">
          {this.content}
        </div>
      </div>
    )
  }
}

module.exports = exports = Article
