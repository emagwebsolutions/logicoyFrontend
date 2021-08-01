import React from 'react'
import {Row,Col,Form} from 'react-bootstrap'

export default function DashboardWaybillHeader({title}){
    return (
        <Row>

        <Col xs={12} md={6}>
            <div className="htitle">
            {title}
            </div>
        </Col>

        <Col xs={12} md={6}>
        <Form.Group>
        <Form.Control type="text" placeholder="Search Waybills" />
        </Form.Group>
        </Col>

        </Row>
    )
}