import React, { PropTypes, Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import ArticleList from './ArticleList'

class App extends Component {
  constructor(props) {
    super(props)
    this.articles = this.props.articles || []
  }

  render() {
    return (
      <div>
        <Header title="React Blog" />
        <ArticleList articles={this.articles}></ArticleList>
        <Footer/>
      </div>
    )
  }
}

module.exports = exports = App
