import React,{useReducer} from 'react'
import {Form,Col,Row,Modal,Button} from 'react-bootstrap'
import useDriverlogic from './logic/useDriverlogic'
function reducer(state,action){
  return {...state, [action.name] : action.value}
}


export default function DriverForm(props){
    const [state,dispatch] = useReducer(reducer, {})
    const {adddriver,err} = useDriverlogic()
  
      function onchange(e){
        const {name,value} = e.target

        dispatch({name,value})
      }

      function addDrivers(){
        const st = {
          dcontact: state.dcontact? state.dcontact : '',
          driver: state.driver? state.driver : '',
          license: state.license? state.license : ''
        }
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

            </Col>

            <Col md={6} xs={12}>

          <Form.Group className="mb-3" >
            <Form.Label className="flabl">Driver License Number</Form.Label>
            <Form.Control  name="license" onChange = {onchange}  className="finpt" type="text" placeholder="Driver License Number" />
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