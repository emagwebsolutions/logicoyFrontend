import React from 'react'
import Navbars from '../Navbars'
import {Container,Row,Col} from 'react-bootstrap'
import Footer from '../Footer'
import Chartbox from '../dashboards/Chartbox'
import Linechart from './Linechart'
import Totaltrips from './Totaltrips'
import Totaltransp from './Totaltransp'
import Totaltrucks from './Totaltrucks'
import Totaldrivers from './Totaldrivers'

export default function dashboards({history}){

    return (
        <>
        <Navbars />

        <Container className="mb-4 mt-4 bg-white">
            <Row>
                <Col xs={12}>
                    <div className="p-4">
                    <h2 className="text-center text-muted">STATISTICAL DATA</h2>
                    </div>
                </Col>
            </Row>
        </Container>


        <Container className="mb-4 ">
            <Row>
                <Col xs={12} md={5}>
                    <div className="bg-white p-4 stat-height">
                    <Chartbox />
                    </div>
                </Col>
                <Col xs={12} md={7}>
                    <div className="bg-white p-4 stat-height">
                    <Linechart />
                    </div>
                </Col>
            </Row>
        </Container>


    
        <div className="clearfix"></div>
        <Container className="mb-4">
            <Row>
            <Totaltrips />
            <Totaltrucks />
            </Row>
            <Row>
            <Totaltransp />
            <Totaldrivers />
            </Row>
        </Container>




        <Footer />
        </>
    )
}