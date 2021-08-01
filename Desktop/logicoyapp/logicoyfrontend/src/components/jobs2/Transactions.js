import React from 'react'
import {Tabs,Tab,Col,Container,Row} from 'react-bootstrap'
import Payments from './Payments'
import Drivers from './Drivers'
import Waybills from '../shared/Waybills'

export default function Transactions({getTransp}){
    return (
        <>
        <br /><br />
        <div className="clearfix"></div>
        <Container>
        <Row>
        <Col xs={12}>


        <Tabs defaultActiveKey="Waybills" id="uncontrolled-tab-example" className="mb-3">

        <Tab eventKey="Waybills"  title="Waybills">
            <Waybills data={getTransp} />
        </Tab>

        <Tab eventKey="Drivers" title="Drivers">
            <Drivers data={getTransp} />
        </Tab>

        <Tab eventKey="Payments" title="Payments">
            <Payments data={getTransp} />
        </Tab>

        </Tabs>

    
        </Col>
        </Row>
        </Container>
        </>
    )
}

