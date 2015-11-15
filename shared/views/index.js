/* ------------------------------------------------------------ *\
|  Client-side bundle                                            |
|  @purpose: this file will be transpiled and bundled by         |
|            webpack and will allow the client to pick up the    |
|            react rendering on their end.                       |
| @bruceybonus: we get to use real ES6 because webpack-babel     |
\* ------------------------------------------------------------ */

import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'

const component = React.createElement(App, window.__STATE__)
const container = document.getElementById('app')

ReactDOM.render(component, container)
