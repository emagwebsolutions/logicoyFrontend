import React from 'react'
import {Tabs,Tab,Col,Container,Row} from 'react-bootstrap'
import Trucksinfo from './Trucksinfo'
import Waybillsx from './Waybillsx'

export default function Transtransaction(props){
    return (
        <>
        <br /><br />
        <div className="clearfix"></div>
        <Container>
        <Row>
        <Col xs={12}>


        <Tabs defaultActiveKey="Waybills" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="Waybills"  title="Waybills">
        <Waybillsx PHONE={props.PHONENUM} />
        </Tab>

        <Tab eventKey="Trucks"  title="Trucks">
            <Trucksinfo PHONE={props.PHONENUM} />
        </Tab>
      
        </Tabs>

    
        </Col>
        </Row>
        </Container>
        </>
    )
}

