import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Contact from './Contact'
import About from './About'
export default class index extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    )
  }
}
