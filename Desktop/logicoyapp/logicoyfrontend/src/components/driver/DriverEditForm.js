import React,{useReducer} from 'react'
import {Form,Col,Row,Modal,Button} from 'react-bootstrap'
import useDriverlogic from './logic/useDriverlogic'
function reducer(state,action){
  return {...state, [action.name] : action.value}
}

export default function DriverForm(props){
    const [state,dispatch] = useReducer(reducer, {})
    const {editdriver,err} = useDriverlogic()

      function onchange(e){
        const {name,value} = e.target
        dispatch({name,value})
      }

    const v = {...props.output}

    const drvs = {
      dcontact : state.dcontact? state.dcontact : v.dcontact,
      driver : state.driver? state.driver : v.driver,
      license : state.license? state.license : v.license,
      id : v._id
    }
    

    function editDriver(){
      editdriver(drvs)
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
            <h3><strong>Edit Driver Details</strong></h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body   className="modalpadding">

      <Row>
            <Col md={6} xs={12}>

            <Form.Group className="mb-3" >
            <Form.Label className="flabl">Driver's Name</Form.Label>
            <Form.Control  name="driver" onChange = {onchange}  className="finpt" 
            defaultValue={v.driver}
            type="text" placeholder="Driver's Name" />
            </Form.Group>

            <Form.Group className="mb-3" >
            <Form.Label className="flabl">Driver's Contact</Form.Label>
            <Form.Control  name="dcontact" onChange = {onchange}  className="finpt" 
             defaultValue={v.dcontact}
            type="text" placeholder="Driver's Contact" />
            </Form.Group>


            </Col>


            <Col md={6} xs={12}>

      
            <Form.Group className="mb-3" >
            <Form.Label className="flabl">Driver License Number</Form.Label>
            <Form.Control  name="license" onChange = {onchange}  className="finpt" 
             defaultValue={v.license}
            type="text" placeholder="Driver License Number" />
            </Form.Group>

            </Col>
        </Row>
    
          <h2>{err}</h2>
        </Modal.Body>
        <Modal.Footer>
       
          <Button onClick={props.onHide} className="btn btn-danger btn-md">Close</Button>
          <Button onClick={editDriver} className="btn btn-success btn-md">Update Driver</Button>
        </Modal.Footer>

      </Modal>
        </>
    )
}