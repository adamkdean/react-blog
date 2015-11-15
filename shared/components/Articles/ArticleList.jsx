import React, { PropTypes, Component } from 'react'
import Article from './Article'

class ArticleList extends Component {
  constructor(props) {
    super(props)
    this.articles = this.props.articles || []
  }

  render() {
    const articleList = this.articles.map((article) => {
      return (
        <Article
          key={article.id}
          slug={article.slug}
          title={article.title}>
          {article.content}
        </Article>
      )
    })
    return (
      <div className="article-list">
        {articleList}
      </div>
    )
  }
}

module.exports = exports = ArticleList
