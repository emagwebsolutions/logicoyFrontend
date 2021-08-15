import React from 'react'
import Navbars from '../Navbars'
import Footer from '../Footer'
import {Container,Row,Col} from 'react-bootstrap'
import Cargorates from './Cargorates'
import Fuelrates from './Fuelrates'

const Rates = ()=>{

    return (
        <>
        <Navbars />
        <Container fluid className="mb-4 mt-4">
            <Row>
                <Col xs={12}>
                    <div className="bg-white p-4 text-center mb-4 mt-4">
                        <h2 className="text-muted">RATES</h2>
                    </div>
                </Col>
            </Row>
            <Row>

                <Col xs={12} md={5}>
                <div className="bg-white p-4">
                    <Fuelrates />
                    <div className="clearfix"></div>
                    </div>
                </Col>

                <Col xs={12} md={7}>
                    <div className="bg-white p-4">
                    <Cargorates />
                    <div className="clearfix"></div>
                    </div>
                </Col>


            </Row>
        </Container>

        <Footer />
        </>
    )

}
export default Rates
