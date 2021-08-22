import React from 'react'
import Editprofile from './Editprofile'
import Editpassword from './Editpassword'
import {Col,Container,Row} from 'react-bootstrap'
import Navbars from '../Navbars'
import Footer from '../Footer'

export default function Profile(){
  
    return (
          <>
          <Navbars />
          <br />
          <Container className="bg-white p-4">
          <Row>
          <Col md={6} xs={12}>
            <div className="p-4">
              <Editprofile />
            </div>
          </Col>
          <Col md={6} xs={12}>
            <div className="p-4">            
              <Editpassword />
            </div>
           </Col>
          </Row>
          </Container>
          <Footer />
          </>
        )
}

