import React, { PropTypes, Component } from 'react'

class Pagination extends Component {
  constructor(props) {
    super(props)
    this.page = this.props.page || 1
    this.max = this.props.max || 1
  }

  render() {
    const elements = [];
    for (let i = 1; i <= this.max; i++) {
      let element = this.page == i
        ? <li><a key={'page' + i} href={'?page=' + i} className="current">{i}</a></li>
        : <li><a key={'page' + i} href={'?page=' + i}>{i}</a></li>
      elements.push(element)
    }

    return (
      <div className="pagination">
        <ul>{elements}</ul>
      </div>
    )
  }
}

module.exports = exports = Pagination
