import React from 'react'
import {Button,Container,Col,Row} from 'react-bootstrap'
import Forms from './Forms'



export default function Tabs({setTransp}){
        function addTransporter(){
                
         }
    return (
            <>
            <Container>
            <Row>
            <Col xs={12}>

             <ModalButton setTrans = {setTransp} Form={<Forms />} Func = {addTransporter} Heading="New Job" />

             </Col>
             </Row>
             </Container>
            </>
    )
}