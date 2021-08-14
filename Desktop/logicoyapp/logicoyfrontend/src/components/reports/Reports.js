import React from 'react'
import Navbars from '../Navbars'
import {Container,Row,Col} from 'react-bootstrap'
import Footer from '../Footer'
import Chartbox from '../dashboards/Chartbox'
import Totaltrips from '../dashboards/Totaltrips'
import Totaltransp from '../dashboards/Totaltransp'
import Totaltrucks from '../dashboards/Totaltrucks'

export default function dashboards({history}){

    return (
        <>
        <Navbars />

        <Container className="mb-4">
            <Row>
            <Totaltrips />
            <Totaltrucks />
            <Totaltransp />
            </Row>
        </Container>

        <br />
        <div className="clearfix"></div>

        <Container className="mb-4 ">
            <Row>
                <Col xs={12} md={5}>
                    <div className="bg-white p-4 stat-height">
                    <Chartbox />
                    </div>
                </Col>
                <Col xs={12} md={7}>
                    <div className="bg-white p-4 stat-height">
                    <Chartbox />
                    </div>
                </Col>
            </Row>
        </Container>




        <Footer />
        </>
    )
}