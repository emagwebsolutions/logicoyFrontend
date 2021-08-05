import React from 'react'
import {Tabs,Tab,Col,Container,Row} from 'react-bootstrap'
import Truckwaybills from './Truckwaybills'

export default function Trucktransactions(props){
    return (
        <>
        <br /><br />
        <div className="clearfix"></div>
        <Container>
        <Row>
        <Col xs={12}>


        <Tabs defaultActiveKey="Waybills" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="Waybills"  title="Waybills">
            <Truckwaybills TRUCKNUM={props.TRUCKNUM} />
        </Tab>
        </Tabs>

    
        </Col>
        </Row>
        </Container>
        </>
    )
}

