import React,{useState} from 'react'
import Navbars from '../Navbars'
import Footer from '../Footer'
import {Container,Row, Col,Form,Table,Button} from 'react-bootstrap'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import Approvedwaybills from './Approvedwaybills'
import DateFormats from '../DateFormats'
import useSearchHook from '../useSearchHook'
import Ownerlist from '../shared/Ownerlist'
import Transporterslist from '../shared/Transporterslist'
import useWaybilllogic from './logic/useWaybilllogic'
import {FaTrashAlt, FaRegEdit} from 'react-icons/fa'

export default function Waybill(){

    const dva = useSelector((state)=>state.transporters.alltrans)
    const dvax = {...dva}

    const {deletewaybills} = useWaybilllogic()

    //Data source
   const job = useSelector((state)=> state.waybills.allwaybills)
   const jobs = {...job}


   const {output,searchdatalist} = useSearchHook(job)
   const {formatDate} = DateFormats()

    //States
   const [modalshow, setModalShow] = React.useState(false);
   const [jobdetails,setjobdetails] = useState()

  /*-----------------------------
    START JOBS FORM MODAL
  -----------------------------*/

  function onchange(){
      
  }

  //Modal show
  function setmodalShow(id){
    if(jobs){ 
    const dd = Object.values(jobs).filter(v => {
        if(v._id === id){
            return v
        }
        else{
            return ''
        }
    })
     setjobdetails({...dd[0]})
    }
    setModalShow(true)
  }

  //Modal Hide
  function setmodalhide(){
      setModalShow(false)
  }
  /*-----------------------------
  END JOBS FORM MODAL
  -----------------------------*/

    let obs = output || Object.values(jobs)


    let i=0 
    let cargotot = 0
    let fueltot = 0
    const waybills = Object.values(obs).map((v) => {
        cargotot += Number(v.trans_cost)
        fueltot += Number(v.fuel_cost)
        i++

        const totamnt = v.trans_cost - v.fuel_cost
        const blnce = totamnt - v.payment 
        let pay = 0 
        if(v.payment > 0){
            pay = blnce < 1? 'Full' : 'Part'
        }
        else{
            pay = 'None'
        }
     



        return (
                    <tr>
                    <td>{i}</td>
                    <td>{formatDate(v.date)}</td>
                    <td>{v.fullname}</td>
                    <td>{v.transporter}</td>

                    <td>{v.destination}</td>
                    <td>{v.type}</td>
                    <td>{v.bags}</td>
                    <td>{v.cargo_rate}</td>
                
                    

                    <td>{v.fuelstation}</td>
                    <td>{v.fuel}</td>
                    <td>{v.fuel_rate}</td>

                     
                    <td>{v.fuel_cost.toLocaleString()}</td>
                    <td>{v.trans_cost.toLocaleString()}</td>

                    <td>{pay}</td>

                    <td>
                        {/* DELETE */}
                        <Link to="/#"  
                        onClick={(e)=>{
                        e.preventDefault()
                        deletewaybills(v._id)
                        }} 
                        className="cursor">
                        <FaTrashAlt className="text-danger mr-3 smbtn" />
                        </Link>

                        {/* EDIT */}
                        <Link to="/#" 
                        onClick={(e)=>{
                        e.preventDefault()
                        setmodalShow(v._id)
                        }}>
                        <FaRegEdit className="text-primary smbtn" />
                        </Link>
                    </td>

                    </tr>
        )
    
    })



    return (
        <>
        <Navbars />
        
        <Container fluid className="mt-5">

        <Row>
        <Col xs={12}>
        <div class="bg-white p-5">
        <Row>
        <Col xs={12} md={3}>
        <div className="htitle">
        WAYBILLS
        </div>
        </Col>
        <Col xs={12} md={5}></Col>
        <Col xs={12} md={4}>
        <Form.Group>
        <Form.Control type="text" onChange={searchdatalist} placeholder="Search Waybills" />
        </Form.Group>
        </Col>
        </Row>


        <Row className="mt-4 mb-4">
        <Col xs={12} md={2}>
         <h4 className="mt-5 text-right">Filter Waybills</h4>
        </Col>

        <Col xs={12} md={2}>
        <Transporterslist  dvax={dvax} onchangex={onchange} />
        </Col>

        <Col xs={12} md={2}>
        <Ownerlist onchangex={onchange} />
        </Col>

        <Col xs={12} md={2}>
        <Form.Group>
        <Form.Label>Start Date</Form.Label>
        <Form.Control type="date" name="start_date" />
        </Form.Group>
        </Col>

        <Col xs={12} md={2}>
        <Form.Group>
        <Form.Label>End Date</Form.Label>
        <Form.Control type="date" name="end_date" />
        </Form.Group>
        </Col>

        <Col xs={12} md={2}>
        <Button className="btn btn-secondary mt-5">Filter Waybill</Button>
        </Col>
        </Row>


        <Row>
        <Col xs={12}>

        <div className="waybillTb2">
        <Table responsive="lg" bordered>

        <thead>
        <tr>
        <th>#</th>
        <th>Date</th>
        <th>Cargo Owner</th>
        <th>Transporter</th>

        <th>Destination</th>
        <th>Cargo Type</th>
        <th>Cargo Qty</th>
        <th>Unit Price</th>


        <th>Fuel Station</th>
        <th>Litre(s)</th>
        <th>Unit Price</th>

        <th>Fuel Total</th>
        <th>Cargo Total</th>

        <th>Payment</th>


        <th>Action</th>
        </tr>

        </thead>

        <tbody>
        {waybills}
        </tbody>

        </Table>
        </div>
        </Col>
        </Row>
        </div>
        </Col>
        </Row>


        <Row>
        <Col xs={12}>
            <div className="bg-white">
            <Row>

                <Col xs={12} md={3} className="text-right">
                Cargo Grand Total GHs
                </Col> 
                <Col xs={12} md={3}>
                {cargotot.toLocaleString()}
                </Col>

                <Col xs={12} md={3} className="text-right">
                Fuel Grand Total GHs
                </Col> 
                <Col xs={12} md={3}>
                {fueltot.toLocaleString()}
                </Col>
            </Row>
            </div>
        </Col>
        </Row>


        </Container>

        <Footer />
        <Approvedwaybills  output={jobdetails} onHide={setmodalhide} show ={modalshow} />
        </>
    )
    
    

    
}