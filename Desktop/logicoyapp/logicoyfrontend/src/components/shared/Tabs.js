import React from 'react'
import {Button,Container,Col,Row} from 'react-bootstrap'

export default function Tabs(props){
    return (
            <>
            <Container>
            <Row>
            <Col xs={12}>
            <Row>

            <Col xs={12} md={3}>
            <Button onClick={props.setModalShow}  className="btn btn-secondary btn-lg">
                {props.Heading}
            </Button>
            </Col>
            <Col xs={12} md={9}>
                <div className="border-bottom">
                <h2>{props.Heading.toUpperCase()}</h2>
                </div>
            </Col>

            </Row>

             </Col>
             </Row>
             </Container>

            </>
    )
}