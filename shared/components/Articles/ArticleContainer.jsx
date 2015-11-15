import React, { PropTypes, Component } from 'react'
import ArticleList from './ArticleList'
import Pagination from '../Common/Pagination'

class ArticleContainer extends Component {
  constructor(props) {
    super(props)
    this.articles = this.props.articles || []
    this.page = this.props.page || 1
    this.pages = this.props.pages || 1
    this.nopages = this.props.nopages || false
  }

  render() {
    const pagination = !this.nopages && <Pagination page={this.page} max={this.pages} />
    return (
      <div>
        <ArticleList articles={this.articles}></ArticleList>
        {pagination}
      </div>
    )
  }
}

module.exports = exports = ArticleContainer
