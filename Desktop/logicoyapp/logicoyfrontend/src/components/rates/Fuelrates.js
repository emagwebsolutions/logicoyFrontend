import React from 'react'
import {Table} from 'react-bootstrap'
import {Row,Col,Form,Button} from 'react-bootstrap'


export default function Cargorates(){
  
    return (
        <>
        <Row>
            <Col xs={12} md={4}>
            <Form.Group className="mb-3" >
            <Form.Label className="flabl">Litres</Form.Label>
            <Form.Control  name="litre"  value="1"   type="text" placeholder="Litre" /> 
            </Form.Group>
            </Col>
  
            <Col xs={12} md={4}>
            <Form.Group className="mb-3">
            <Form.Label className="flabl">Fuel Station</Form.Label>
            <Form.Control  name="fuelstation" as="select" className="mb-3">
            <option value="" hidden>Select Fuel Station</option>
            <option value="Shell">Shell</option>
            <option value="Engene">Engene</option>
            </Form.Control>
            </Form.Group>
            </Col>
          
            <Col xs={12} md={4}>
                <br />
             <Button  className="mt-2 btn btn-secondary btn-md p-2">Save Rate</Button>
             </Col>

        </Row>
        <h2>Error message</h2>

        <br />
        <Row>

        <Col xs={12} md={6}>
            <div className="htitle">
            FUEL RATES
            </div>
        </Col>

        <Col xs={12} md={6}>
        <Form.Group>
        <Form.Control type="text"  placeholder="Search Fuel rates" />
        </Form.Group>
        </Col>

        </Row>


        <div className="ratestbl">
        <Table responsive="lg" >
            <thead>
            <tr>
                <th>#</th>
                <th>Date</th>
                <th>Fuel Station</th>
                <th>Rate (Litre)</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
        




            </tbody>
        </Table>
        </div>
 
        </>
    )
}