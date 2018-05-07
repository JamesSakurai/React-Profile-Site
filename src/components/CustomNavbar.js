import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './CustomNavbar.css'

export default class extends Component {
  render() {
    return(
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">James Sakurai</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
              About
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/resume" to="/resume">
              Resume
            </NavItem>
            <NavItem eventKey={4} componentClass={Link} href="/portfolio" to="/portfolio">
              Portfolio
            </NavItem>
            <NavItem eventkey={5} componentClass={Link} href="https://www.linkedin.com/in/jamessakurai/" target="_blank" to="https://www.linkedin.com/in/jamessakurai/">
              <i className="fab fa-linkedin fa-lg"></i>
            </NavItem>
            <NavItem eventkey={6} componentClass={Link} href="https://github.com/JamesSakurai" target="_blank" to="https://github.com/JamesSakurai">
              <i className="fab fa-github-square fa-lg"></i>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}