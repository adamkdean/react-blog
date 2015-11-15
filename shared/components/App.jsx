import React, { PropTypes, Component } from 'react'
import Header from './Common/Header'
import Footer from './Common/Footer'
import ArticleContainer from './Articles/ArticleContainer'

class App extends Component {
  constructor(props) {
    super(props)
    this.articles = this.props.articles || []
    this.page = this.props.page || 1
    this.pages = this.props.pages || 1
    this.nopages = this.props.nopages || false
  }

  render() {
    return (
      <div>
        <Header title="React Blog"/>
        <ArticleContainer articles={this.articles} nopages={this.nopages} page={this.page} pages={this.pages}/>
        <Footer/>
      </div>
    )
  }
}

module.exports = exports = App
