import React from 'react'
import {Nav,Navbar,Col,Row,Container} from 'react-bootstrap'
import {Link,useHistory} from 'react-router-dom'
import Logo from '../imgs/logo.jpg'
import { FaHouseDamage } from 'react-icons/fa'
import Data from './redux/Data'
import curuser from './users/curuser'

export default function Navbars(){
  const {creator} = curuser()
  const history = useHistory()
  const {allData} = Data()
  allData()
  if(!localStorage.length){
    history.push('/')
  }

  const user = creator? creator.createdby : ''

  const logout = ()=>{
    localStorage.clear()
    history.push('/')
  }


  
let chkrole;
if(localStorage.getItem('userd')){
chkrole = JSON.parse(localStorage.getItem('userd')).role
}
else{
  chkrole = 'none'
}

    return (
        <>
        <Navbar bg="light" expand="lg" className="shadow">
        <Navbar.Brand><img src={Logo} alt="Logo" className="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
           {(chkrole === 'Admin') ? <Link to="/users" className="nav-link">Users</Link> : ''}
            <Link to="/transporters" className="nav-link">Transporters</Link>
            <Link to="/driver" className="nav-link">Driver</Link>
            <Link to="/jobs" className="nav-link">Jobs</Link>
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