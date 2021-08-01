import React,{useState,useReducer} from 'react'
import {Form,Col,Row,Modal,Button} from 'react-bootstrap'
import useDriverlogic from './logic/useDriverlogic'
import {useSelector} from 'react-redux'
function reducer(state,action){
  return {...state, [action.name] : action.value}
}


export default function DriverForm(props){
  const dva = useSelector((state)=>state.transporters.alltrans)
  const dvax = {...dva}
    const [state,dispatch] = useReducer(reducer, {})
    const {adddriver,err} = useDriverlogic()
    const [trns,setrans] = useState("")
  
      function onchange(e){
        const {name,value} = e.target

        if(name === 'transporter'){
          const rr = Object.values(dvax).filter(v => {
            return v.transporter === value
          })
          setrans(rr[0])
        }
        dispatch({name,value})
      }

      function addDrivers(){
        const st = {
          dcontact: state.dcontact? state.dcontact : '',
          driver: state.driver? state.driver : '',
          license: state.license? state.license : '', 
          transporter: state.transporter? state.transporter : trns.transporter,
          tcontact: state.tcontact? state.tcontact : trns.tcontact,
          trucknumber: state.trucknumber? state.trucknumber : ''
        }
        console.log(st)
        adddriver(st)
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
            <h3><strong>New Driver</strong></h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body   className="modalpadding">
      <Row>
      
            <Col md={6} xs={12}>

            <Form.Group className="mb-3" >
            <Form.Label className="flabl">Driver's Name</Form.Label>
            <Form.Control  name="driver" onChange = {onchange}  className="finpt" type="text" placeholder="Driver's Name" />
            </Form.Group>

            <Form.Group className="mb-3" >
            <Form.Label className="flabl">Driver's Contact</Form.Label>
            <Form.Control  name="dcontact" onChange = {onchange}  className="finpt" type="text" placeholder="Driver's Contact" />
            </Form.Group>

            <Form.Group className="mb-3" >
            <Form.Label className="flabl">Driver License Number</Form.Label>
            <Form.Control  name="license" onChange = {onchange}  className="finpt" type="text" placeholder="Driver License Number" />
            </Form.Group>

            </Col>

            <Col md={6} xs={12}>

            <Form.Group className="mb-3">
            <Form.Label className="flabl">Transporter</Form.Label>
            <Form.Control name="transporter"  onChange = {onchange} as="select" className="mb-3">
              <option value="" hidden> Select transporter</option>
            {
              Object.values(dvax).map(v => {
                return <option key={v._id} value={v.transporter}>{v.transporter}</option>
              })
            }
            </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" >
            <Form.Label className="flabl">Transporter Contact</Form.Label>
            <Form.Control  name="tcontact" defaultValue={trns? trns.tcontact : ''} onChange = {onchange}  className="finpt" disabled type="text" placeholder="Transporter Contact" />
            </Form.Group>

            <Form.Group className="mb-3" >
            <Form.Label className="flabl">Truck Number</Form.Label>
            <Form.Control  name="trucknumber" onChange = {onchange}  className="finpt" type="text" placeholder="Truck Number" />
            </Form.Group>


            </Col>


        </Row>
    
          <h2>{err}</h2>
        </Modal.Body>
        <Modal.Footer>
       
          <Button onClick={props.onHide} className="btn btn-danger btn-md">Close</Button>
          <Button onClick={addDrivers} className="btn btn-success btn-md">Save </Button>
        </Modal.Footer>

      </Modal>
        </>
    )
}