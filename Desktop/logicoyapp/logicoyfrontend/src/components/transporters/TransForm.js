import React,{useReducer} from 'react'
import {Form,Col,Row,Modal,Button} from 'react-bootstrap'
import useTranslogic from './logic/useTranslogic'

function reducer(state,action){
  return {...state, [action.name] : action.value}
}


export default function TransForm(props){

    const [state,dispatch] = useReducer(reducer, {})

    const {addTrans,err} = useTranslogic()

      function onchange(e){
        const {name,value} = e.target
        dispatch({name,value})
      }

      function addTransp(){
        addTrans(state)
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
            <h3><strong>New Transporter</strong></h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body   className="modalpadding">


        
      <Row>
      
            <Col md={6} xs={12}>

            <Form.Group className="mb-3" >
            <Form.Label className="flabl">Transporter's Name</Form.Label>
            <Form.Control  name="transporter" onChange = {onchange}  className="finpt" type="text" placeholder="Transporter's Name" />
            </Form.Group>

            </Col>

            <Col md={6} xs={12}>

            <Form.Group className="mb-3" >
            <Form.Label className="flabl">Contact Number</Form.Label>
            <Form.Control  name="tcontact" onChange = {onchange}  className="finpt" type="text" placeholder="Contact Number" />
            </Form.Group>


            </Col>


        </Row>
    
          <h2>{err}</h2>
        </Modal.Body>
        <Modal.Footer>
       
          <Button onClick={props.onHide} className="btn btn-danger btn-md">Close</Button>
          <Button onClick={addTransp} className="btn btn-success btn-md">Save </Button>
        </Modal.Footer>

      </Modal>
        </>
    )
}