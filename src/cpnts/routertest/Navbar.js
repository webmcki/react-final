import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'

const Navbar = (props) => {
  // console.log(props)
  setTimeout(() => {
    props.history.push('/')
  }, 2000)
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default withRouter(Navbar)
