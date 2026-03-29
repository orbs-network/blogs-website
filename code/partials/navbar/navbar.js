import React from 'react'
import NavbarTop from './navbar-top'

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="main-grid navbar-flex">
        <NavbarTop {...props} />
      </div>
    </div>
  )
}

export default Navbar
