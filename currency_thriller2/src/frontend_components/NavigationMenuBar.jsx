import React, { Component } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import ct_name1 from '../media_sources/g23.png'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class NavigationMenuBar extends React.Component {

  render() {
    return (
      <>
          <Navbar collapseOnSelect className='rounded'
            expand ='lg'
            bg={this.props.background}
            variant = {this.props.variant}>
              <Container>
                <Navbar.Brand>
                  <img alt ="" src={ct_name1} width = '250' height='35' className='d-inline-block align-bottom' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id = 'responsive-navbar-nav' >
                  <Nav className = 'mr-auto' >
                    <Nav.Link href = "#home">Home</Nav.Link>
                    <Nav.Link href='#currency_checker'>CurrencyChecker </Nav.Link>
                    <Nav.Link href='#currency_calculator'>CurrencyCalculator</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
      </>
    )
  }
}

