import React,{useReducer} from 'react'
import {Form,Col,Row,Modal,Button} from 'react-bootstrap'
import useJobslogic from './logic/useJobslogic'

function reducer(state,action){
  return {...state, [action.name] : action.value}
}


export default function JobsForm(props){
    const [state,dispatch] = useReducer(reducer, {})
    const {editjob,err} = useJobslogic()
    
      function onchange(e){
        const {name,value} = e.target
        dispatch({name,value})
      }

    const v = {...props.output}

    const drvs = {
      fullname: state.fullname? state.fullname : v.fullname,
      transporter: state.transporter? state.transporter : v.transporter,
      tcontact: state.tcontact? state.tcontact : v.tcontact,
      bags: state.bags? state.bags : v.bags,
      destination: state.destination? state.destination : v.destination,
      trucknumber: state.trucknumber? state.trucknumber : v.trucknumber,
      driver: state.driver? state.driver : v.driver,
      dcontact: state.dcontact? state.dcontact : v.dcontact,
      license: state.license? state.license : v.license,
      fuel: state.fuel? state.fuel : v.fuel,
      fuelstation: state.fuelstation? state.fuelstation : v.fuelstation,
      date: state.date? state.date : v.date,
      creatorid: state.creatorid? state.creatorid : v.creatorid,
      createdby: state.createdby? state.createdby : v.createdby,
      creatorphone: state.creatorphone? state.creatorphone : v.creatorphone,
      id : v._id
    }
    

    function editjobs(){
      editjob(drvs)
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
          <h3><strong>New Job</strong></h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body   className="modalpadding">

    <Row>
          <Col md={6} xs={12}>

          <Form.Group className="mb-3">
          <Form.Label className="flabl">Client's Name</Form.Label>
          <Form.Control defaultValue={v.fullname}  name="fullname" onChange = {onchange}  className="finpt" type="text" placeholder="Client's Name" />
          </Form.Group>

          <Form.Group className="mb-3">
          <Form.Label className="flabl">Transporter</Form.Label>
          <Form.Control defaultValue={v.transporter}  name="transporter" onChange = {onchange}  className="finpt" type="text" placeholder="Transporter" />
          </Form.Group>

          <Form.Group className="mb-3">
          <Form.Label className="flabl">Transporter's Contact</Form.Label>
          <Form.Control defaultValue={v.tcontact} name="tcontact" onChange = {onchange}    className="finpt" type="text" placeholder="Transporter's Contact" />
          </Form.Group>

          <Form.Group className="mb-3" >
          <Form.Label className="flabl">Bags/Tonnage Loaded</Form.Label>
          <Form.Control defaultValue={v.bags} name="bags" onChange = {onchange}  className="finpt" type="text" placeholder="Bags/Tonnage Loaded" />
          </Form.Group>

          <Form.Group className="mb-3">
          <Form.Label className="flabl">Destination</Form.Label>
          <Form.Control defaultValue={v.destination} name="destination" onChange = {onchange} as="select" className="mb-3">
          <option value="Accra">Accra</option>
          <option value="Kumasi">Kumasi</option>
          <option value="Takoradi">Takoradi</option>
          <option value="Sunyani">Sunyani</option>
          <option value="Tamale">Tamale</option>
          <option value="Koforidua">Koforidua</option>
          <option value="Cape Coast">Cape Coast</option>
          </Form.Control>
          </Form.Group>


          <Form.Group className="mb-3" >
          <Form.Label className="flabl">Truck Number</Form.Label>
          <Form.Control defaultValue={v.trucknumber} name="trucknumber" onChange = {onchange}  className="finpt" type="text" placeholder="Truck Number" />
          </Form.Group>

          </Col>
          <Col md={6} xs={12}>

          <Form.Group className="mb-3" >
          <Form.Label className="flabl">Driver's Name</Form.Label>
          <Form.Control defaultValue={v.driver} name="driver" onChange = {onchange}  className="finpt" type="text" placeholder="Driver's Name" />
          </Form.Group>

          <Form.Group className="mb-3" >
          <Form.Label className="flabl">Driver's Contact</Form.Label>
          <Form.Control defaultValue={v.dcontact}  name="dcontact" onChange = {onchange}  className="finpt" type="text" placeholder="Driver's Contact" />
          </Form.Group>

          <Form.Group className="mb-3" >
          <Form.Label className="flabl">Driver License Number</Form.Label>
          <Form.Control defaultValue={v.license}  name="license" onChange = {onchange}  className="finpt" type="text" placeholder="Driver License Number" />
          </Form.Group>

          <Form.Group className="mb-3" >
          <Form.Label className="flabl">Fuel (Optional)</Form.Label>
          <Form.Control defaultValue={v.fuel} name="fuel" onChange = {onchange}  className="finpt" type="text" placeholder="Fuel" />
          </Form.Group>

          <Form.Group className="mb-3">
          <Form.Label className="flabl">Fuel Station (Optional)</Form.Label>
          <Form.Control defaultValue={v.fuelstation} name="fuelstation" onChange = {onchange} as="select" className="mb-3">
          <option value="" hidden>Select Filling Station</option>
          <option value="Shell">Shell</option>
          <option value="Engene">Engene</option>
          </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3">
          <Form.Label className="flabl">Date</Form.Label>
          <Form.Control defaultValue={v.date} name="date" onChange = {onchange}  
          type="date" className="finpt" placeholder="Date" 
           />
          </Form.Group>

          </Col>
      </Row>

      <h2>{err}</h2>
    
      </Modal.Body>
      <Modal.Footer>
     
        <Button onClick={props.onHide} className="btn btn-danger btn-md">Close</Button>
        <Button onClick={editjobs}  className="btn btn-success btn-md">Save </Button>
      </Modal.Footer>

    </Modal>
      </>
  )
}