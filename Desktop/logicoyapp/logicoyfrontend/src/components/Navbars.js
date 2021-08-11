import React from 'react'
import {Nav,Navbar,Col,Row,Container,NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Logo from '../imgs/logo.jpg'
import { FaHouseDamage } from 'react-icons/fa'
import curuser from './users/curuser'
import RestrictAccess from './shared/RestrictAccess'

export default function Navbars(){ 
  const {pageredirect,logout,hidepage,hidepage2} = RestrictAccess()
  pageredirect()

  const {creator} = curuser()
  const user = creator? creator.createdby : ''


    return (
        <>
        <Navbar bg="light" expand="lg" className="shadow">
        <Navbar.Brand><img src={Logo} alt="Logo" className="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/users" style={hidepage()} className="nav-link">Users</Link> 
            <Link to="/transporters" style={hidepage2()} className="nav-link">Transporters</Link>
            <Link to="/trucks" style={hidepage2()} className="nav-link">Trucks</Link>
            <Link to="/driver" style={hidepage2()} className="nav-link">Driver</Link>
            <Link to="/jobs" style={hidepage2()} className="nav-link">Jobs</Link>

            <NavDropdown title="Rates" style={hidepage()} id="basic-nav-dropdown" alignRight>
                    <NavDropdown.Item to="/fuelrates">Fuel</NavDropdown.Item>
                    <NavDropdown.Item to="/transportersrates">Transporters</NavDropdown.Item>
            </NavDropdown>

            <Link to="/waybills"  style={hidepage()} className="nav-link">Waybills</Link>

            <Link to="/reports" className="nav-link">Reports</Link>

            </Nav>

        </Navbar.Collapse>
        </Navbar>

        <Container> 
          <Row>
            <Col md={4} xs={12}>
              <div className="mt-3">
                <Link to="/profile" className="text-dark">
              You are Logged in as <strong>{user}</strong>
              </Link>
              </div>
            </Col>
            <Col md={6} xs={12}>
              
            </Col> 
            <Col md={2} xs={12}>
            <div className="mt-3">
            <FaHouseDamage /> <Link to="/#" onClick={logout}>Logout</Link>
            </div>
            </Col>
          </Row>
        </Container>
        </>

    )
}