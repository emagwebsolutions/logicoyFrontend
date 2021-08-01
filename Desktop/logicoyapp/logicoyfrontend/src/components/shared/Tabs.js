import React from 'react'
import {Button,Container,Col,Row} from 'react-bootstrap'

export default function Tabs(props){
    return (
            <>
            <Container>
            <Row>
            <Col xs={12}>

            <Button onClick={props.setModalShow}  className="btn btn-secondary btn-lg">
                {props.Heading}
            </Button>

             </Col>
             </Row>
             </Container>

            </>
    )
}