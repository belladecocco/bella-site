import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/Bella Site Logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="colorBar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item logo">
            <figure className="image">
              <img src={logo} alt="bella" style={{ width: '400px', }} />
            </figure>
          </Link>
        </div>
        <div className="navbar-end">
          <a
            className="navbar-item"
            href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <img src={github} alt="Github" />
            </span>
          </a>
        </div>
      </div>
    </div>
    <div >
      <div className="secondNav">        
      <Link className="navbar-item" to="/blog/coding">
          Code
        </Link>
        <Link className="navbar-item" to="/blog/webdesign">
          Web Design
        </Link>
        <Link className="navbar-item" to="/blog/writing">
          Writing
        </Link>
        <Link className="navbar-item" to="/blog/art">
          Art
        </Link>
        <Link className="navbar-item" to="/about">
          Summary
        </Link>
      </div>
      </div>
  </nav>
)

export default Navbar
