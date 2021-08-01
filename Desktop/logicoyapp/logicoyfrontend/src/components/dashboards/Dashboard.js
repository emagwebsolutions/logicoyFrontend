import React from 'react'
import Navbars from '../Navbars'
import {Container,Row,Col} from 'react-bootstrap'
import Footer from '../Footer'
import Stats from './Stats'
import Historybox from './Historybox'
import WaybillHeader from './WaybillHeader'
import Chartbox from './Chartbox'
import Approvedwaybills from './Approvedwaybills'
import Unapprovedwaybills from './Unapprovedwaybills'
import useDashboardlogic from './logic/useDashboardlogic'

export default function Dashboard({history}){
    //Dashboard logic
    const {jobs,trips,trucks,transps} = useDashboardlogic({history})


    return (
        <>
        <Navbars />
        <Container className="mb-4">
            <Row>
                
                <Stats bg="bg-success" total={trips} description="Total Trips" col="4" />

                <Stats bg="bg-primary" total={trucks} description="Total Trucks" col="4" />

                <Stats bg="bg-danger" total={transps} description="Total Transporters" col="4" />

            </Row>
        </Container>

<br />
<div className="clearfix"></div>
        <Container className="mb-4 ">
            <Row>

                <Col xs={12} md={6}>
                <div className="bg-white p-4">
                    <WaybillHeader title="Unapproved Waybills" />
                    <Unapprovedwaybills data={jobs} />
                    <div className="clearfix"></div>
                    </div>
                </Col>

                <Col xs={12} md={6}>
                    <div className="bg-white p-4">
                    <WaybillHeader title="Approved Waybills" />
                    <Approvedwaybills data={jobs} />
                    <div className="clearfix"></div>
                    </div>
                </Col>


            </Row>

<br />
<div className="clearfix"></div>
            <Row>
                <Col xs={12} md={6}>
                    <div className="bg-white p-4 stat-height">
                    <Historybox />
                    </div>
                </Col>
                <Col xs={12} md={6}>
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