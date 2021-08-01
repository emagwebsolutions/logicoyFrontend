import React from "react"
import {Container, Row, Col,Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Logo from '../imgs/logo.jpg'
import Loginlogic from './Loginlogic'

export default function Login({history}){

    //Logic for Login component
    const {err,onchangex,loginfunc} = Loginlogic({history})

    return (
        <>  
        <Container fluid>
        <Row>

            <Col xs={12} md={6}> 
            <Row>
            <Col xs={12} md={5} className="login-bx">
                
            <Form>
            <img src={Logo} alt="Logo" className="logo2" />
                <span>{err}</span>
            <Form.Group controlId="formBasicEmail">
           
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" onChange = {onchangex}  className="p-3" placeholder="Enter email"  />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>  
                <Form.Control type="password" name="password" onChange={onchangex}  placeholder="Password" />
            </Form.Group>
   
            <Link to="/forgetpassword" className="lost-password">Forgot password?</Link>

            <Link to="/#" className="login-btn btn btn-primary btn-block btn-sm" onClick={loginfunc}>
                Login
            </Link>
            </Form>

            </Col>
            </Row>

            </Col>

            <Col xs={12} md={6} className="p-0">
                <div className="login-bg"></div>
            </Col>


        </Row>
        </Container> 
        </>
    )
}