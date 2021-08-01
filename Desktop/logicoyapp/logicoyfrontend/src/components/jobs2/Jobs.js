import React,{useState} from 'react'
import Navbars from '../Navbars'
import Footer from '../Footer'
import {Container,Row,Col} from 'react-bootstrap'
import List from '../shared/List'
import Details from '../shared/Details'
import Transactions from './Transactions'
import Tabs from './Tabs'
export default function Jobs(){
    const [transporter,setTransporter] = useState("")
    return (
        <>
        <Navbars />
        <br />
        <Container className="bg-white ">
            <Row>
                <Col xs={12} md={4}>
                    <div className="p-4">
                    <List setTransp={setTransporter} getTransp={transporter} />
                    </div>
                </Col>
                <Col xs={12} md={8}>
                    <div className="pt-4 pb-4">
                    <Tabs setTransp={setTransporter} />
                    <Details getTransp={transporter} />
                    <Transactions getTransp={transporter} />
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    )
}