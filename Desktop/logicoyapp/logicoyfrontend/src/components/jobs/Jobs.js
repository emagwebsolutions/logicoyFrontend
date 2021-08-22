import React,{useState} from 'react'
import Navbars from '../Navbars'
import Footer from '../Footer'
import {Container,Row,Col} from 'react-bootstrap'
import List from '../shared/List'
import Details from '../shared/Details'
import Transactions from '../shared/Transactions'
import Tabs from '../shared/Tabs'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import JobsForm from './JobsForm'
import useSearchHook from '../useSearchHook'

export default function Jobs(){
    const [modalshow, setModalShow] = React.useState(false);
    const datasource2 = useSelector((state)=> state.transporters.alltrans)
    const transports = {...datasource2}
    const {output,searchdatalist} = useSearchHook(datasource2)

    const [jobdetails, setjobdetails] = useState()
    const [mobilephone, setmobilephone] = useState()

    /*-----------------------------
    START JOBS FORM MODAL
    -----------------------------*/
    function setmodalShow(){
        setModalShow(true)
    }
    function setmodalhide(){
        setModalShow(false)
    }
    /*-----------------------------
    END JOBS FORM MODAL
    -----------------------------*/


    const tr = useSelector((state)=> state.trucks.alltrucks)
    const trcks = {...tr}

    function jobsdetailss(phone){
        setmobilephone(phone)

        const tot = Object.values(trcks).filter(v => {
            if(phone === v.tcontact){
                return v.trucknumber
            }
            else{
                return ''
            }
        })
     

        const rs = Object.values(transports).map(v => {

            if(v.tcontact === phone ){
            return (
                <React.Fragment  key={v._id}>
                <tr>
                <td style={{width:"30%"}}>Transporter:</td>
                <td>{v.transporter}</td>
                </tr>

                <tr>
                <td>Contact:</td>
                <td>{v.tcontact}</td>
                </tr>

                <tr>
                <td>Total Trucks:</td>
                <td>{tot? tot.length : 0}</td>
                </tr>

                <tr>
                <td>Created by:</td>
                <td>{v.createdby}</td>
                </tr>
            
                </React.Fragment>
            
                )
            }
            else{
                return ''
            }
        })
  
        
        setjobdetails(rs)
    }

    let outputresult 
    let obs
    if(output){
        obs = output
    }
    else{
        obs = Object.values(transports)
    }
 
    let i=0
    outputresult = Object.values(obs).map((v) => {
        i++
        return (
            <Row key={v._id}   className="border p-2">
            <Col md={9} xs={12}>
            <Link to="/#" style={{color: "#000000",fontSize: "11px"}} 
            onClick={(e)=>{
                e.preventDefault()
                jobsdetailss(v.tcontact)
            }}>
            {i}. {v.transporter}
            </Link>
            </Col>


        </Row>

        )
    })


    return (
        <>
        <Navbars />
        <br />
        <Container className="bg-white ">
            <Row>
                <Col xs={12} md={4}>
                    <div className="p-4">
                    <List DATA={outputresult} searchbx={searchdatalist} />
                    </div>
                </Col>
                <Col xs={12} md={8}>
                    <div className="pt-4 pb-4">
                    <Tabs Heading="Add Jobs"   setModalShow={setmodalShow} />
                    <Details DLIST = {jobdetails} />
                    <Transactions PHONENUM={mobilephone} />
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer />
        
        <JobsForm   onHide={setmodalhide} show ={modalshow} />

        </>
    )
}