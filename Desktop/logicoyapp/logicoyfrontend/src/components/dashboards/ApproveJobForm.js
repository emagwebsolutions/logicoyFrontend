import React, { useReducer,useState} from 'react'
import { Form, Col, Row, Modal, Button } from 'react-bootstrap'
import useApprovedbillslogic from './logic/useApprovedbillslogic'
import {useSelector} from 'react-redux'
import DateFormats from '../DateFormats'

import Destinationeditlist from '../shared/Destinationeditlist'
import Drivereditlist from '../shared/Drivereditlist'
import Fueleditlist from '../shared/Fueleditlist'
import Ownereditlist from '../shared/Ownereditlist'
import Truckeditlist from '../shared/Truckeditlist'



function reducer(state, action) {
  return { ...state, [action.name]: action.value }
}


export default function ApproveJobForm(props) {
  const [state, dispatch] = useReducer(reducer, {})
  const [loaded,setloaded] = useState("")
  const { approvejob, err } = useApprovedbillslogic()
  const [trns,setrans] = useState("")
  const [drv,setdrv] = useState("")


  const cc = useSelector((state)=> state.drivers.alldrivers)
  const dta = {...cc}
   //Get date formats
   const {ymd} = DateFormats()
   var v = { ...props.output }


  const drvs = {
    fullname: state.fullname || v.fullname,
    transporter:  trns.transporter || v.transporter,
    tcontact: trns.tcontact || v.tcontact,
    bags: state.bags || v.bags,
    destination: state.destination || v.destination,
    trucknumber: state.trucknumber || v.trucknumber,
    driver: drv.driver || v.driver,
    dcontact: drv.dcontact  || v.dcontact,
    license: drv.license  ||  v.license,
    fuel: state.fuel || v.fuel,
    type2: state.type2 || v.type2,
    fuelstation: state.fuelstation  || v.fuelstation,
    date: state.date || v.date,
    creatorid: state.creatorid || v.creatorid,
    createdby: state.createdby || v.createdby,
    creatorphone: state.creatorphone || v.creatorphone,
    customer: state.customer || v.customer,
    id: v._id
  }

  function apprvjobs() {
    approvejob(drvs)
  }


  
  function onchange(e) {
    const { name, value } = e.target

    if(name === 'trucknumber'){
      setrans("")
      const rr = Object.values(dta).filter(v => {
        return v.trucknumber === value
      })
      setrans(rr[0])
    }

    if(name === 'driver'){
      setdrv("")
      const rr = Object.values(dta).filter(v => {
        return v.driver === value
      })
      setdrv(rr[0])
    }

    if(name === 'fullname'){
      const load = value.toLowerCase()==='lam' ? 'Bags' : 'Tonage'     
      setloaded(load)
    }
 
    dispatch({ name, value })
  }
  
  let loadtype =''
  if(v.fullname){
      loadtype = v.fullname.toLowerCase() ==='olam'? 'Bags' : 'Tonage'
  }


  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h3><strong>Pending Job</strong></h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalpadding">

          <Row>
            <Col md={6} xs={12}>

            <Ownereditlist onchangex={onchange} v={v} />

            <Form.Group className="mb-3">
            <Form.Label className="flabl">Customer (Optional)</Form.Label>
            <Form.Control  defaultValue={v.customer} name="customer" onChange = {onchange}  as="textarea" rows="3" placeholder="You can enter more customer names seperated by commas e.g Joe,Edward,Osei" />
            </Form.Group>


              <Form.Group className="mb-3">
                <Form.Label className="flabl">Transporter</Form.Label>
                <Form.Control value={drvs.transporter} disabled name="transporter" onChange={onchange} className="finpt" type="text" placeholder="Transporter" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="flabl">Transporter's Contact</Form.Label>
                <Form.Control value={drvs.tcontact} disabled name="tcontact" onChange={onchange} className="finpt" type="text" placeholder="Transporter's Contact" />
              </Form.Group>

              <Form.Group className="mb-3" >
              <Form.Label className="flabl">{loaded || loadtype} loaded</Form.Label>
                <Form.Control defaultValue={v.bags} name="bags" onChange={onchange} className="finpt" type="number" placeholder="Bags/Tonnage Loaded" />
              </Form.Group>
      
                <Destinationeditlist onchangex={onchange} v={v} />
            

            </Col>
            <Col md={6} xs={12}>

            <Truckeditlist onchangex={onchange} v={v} dta={dta} />
            
            <Drivereditlist onchangex={onchange} v={v} dta={dta} />
 

              <Form.Group className="mb-3" >
                <Form.Label className="flabl">Driver's Contact</Form.Label>
                <Form.Control disabled  value={drvs.dcontact}  name="dcontact" onChange={onchange} className="finpt" type="text" placeholder="Driver's Contact" />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label className="flabl">Driver License Number (Optional)</Form.Label>
                <Form.Control value={drvs.license} disabled name="license" onChange={onchange} className="finpt" type="text" placeholder="Driver License Number" />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label className="flabl">Fuel (Optional)</Form.Label>

                <div class="row">
                <div md={6}>
                <Form.Control defaultValue={v.fuel} name="fuel" onChange={onchange} className="finpt" type="number" placeholder="Fuel" />
                </div>

                <div md={6}>
                <Form.Control name="type2" onChange={onchange} defaultValue={v.type2} as="select">
                  <option value="Litre">Litre</option>
                  <option value="Cash">Cash</option>
                </Form.Control>
                </div>
              
                </div>

              </Form.Group>

              <Fueleditlist onchangex={onchange} v={v} />

              <Form.Group className="mb-3">
                <Form.Label className="flabl">Date</Form.Label>
                <Form.Control 
                defaultValue={ymd(v.date)}
                name="date" onChange={onchange}
                  type="date" className="finpt" placeholder="Date"
                />
              </Form.Group>

  




            </Col>
          </Row>

          <h2>{err}</h2>

        </Modal.Body>
        <Modal.Footer>

          <Button onClick={props.onHide} className="btn btn-danger btn-md">Close</Button>
          <Button onClick={apprvjobs} className="btn btn-success btn-md">Save </Button>
        </Modal.Footer>

      </Modal>
    </>
  )
}