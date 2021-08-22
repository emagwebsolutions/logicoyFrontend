import React from 'react'
import Navbars from '../Navbars'
import {Container,Row,Col} from 'react-bootstrap'
import Footer from '../Footer'
import Historybox from './Historybox'
import Chartbox from './Chartbox'
import Approvedwaybills from './Approvedwaybills'
import Unapprovedwaybills from './Unapprovedwaybills'
import axios from 'axios'
import Totaltrips from './Totaltrips'
import Totaltransp from './Totaltransp'
import Totaltrucks from './Totaltrucks'
import RestrictAccess from '../shared/RestrictAccess'

export default function Dashboard({history}){
    const {hidepage2} = RestrictAccess()

    const authorize = async ()=>{
        try{
            const config = {
                headers:{
                    "Content-Type" : "application/json",
                    Authorization: `Bearer ${localStorage.getItem('userToken')}`
                }
            }
            const {data} = await axios.get(`${process.env.REACT_APP_URL}/api/private/authorize/`,config)
            if(!data.success){
                localStorage.setItem("userToken", "")
                history.push("/")
                localStorage.clear()
            }
        }
        catch(err){
            console.log(err.message)
        }
}
authorize()


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

                <Col xs={12} md={6} style={hidepage2()}>
                <div className="bg-white p-4">
                    <Unapprovedwaybills />
                    <div className="clearfix"></div>
                    </div>
                </Col>

                <Col xs={12} md={6} style={hidepage2()}>
                    <div className="bg-white p-4">
                    <Approvedwaybills />
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