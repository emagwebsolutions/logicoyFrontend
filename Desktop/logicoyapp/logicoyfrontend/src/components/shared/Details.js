import React from 'react'
import {Container,Row,Col,Table} from 'react-bootstrap'
export default function Details(props){
 

    return (

            <>
            <br /><br /><br />
            <div className="clearfix"></div>

            <Container>
            <Row>
            <Col xs={12}>

            <Table className="col-md-12 transporter-details">
        
            <tbody>

                {props.DLIST}

            </tbody>
            </Table>

            </Col>
            </Row>
            </Container>
            
            </>
                
    )

}

