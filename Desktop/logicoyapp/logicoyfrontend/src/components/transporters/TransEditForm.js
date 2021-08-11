import React,{useReducer} from 'react'
import {Form,Col,Row,Modal,Button} from 'react-bootstrap'
import useTranslogic from './logic/useTranslogic'

function reducer(state,action){
  return {...state, [action.name] : action.value}
}


export default function TransEditForm(props){
    const [state,dispatch] = useReducer(reducer, {})
    const {editTrans,err} = useTranslogic()
    
      function onchange(e){
        const {name,value} = e.target
        dispatch({name,value})
      }

    const v = {...props.output}
    const drvs = {
      transporter : state.transporter? state.transporter : v.transporter,
      email : state.email? state.email : v.email,
      tcontact : state.tcontact? state.tcontact : v.tcontact,
      contactp : state.contactp? state.contactp : v.contactp,
      tcontacttwo : state.tcontacttwo? state.tcontacttwo : v.tcontacttwo,
      contactptwo : state.contactptwo? state.contactptwo : v.contactptwo,
      tcontactthree : state.tcontactthree? state.tcontactthree : v.tcontactthree,
      contactpthree : state.contactpthree? state.contactpthree : v.contactpthree,
      id : v._id
    }
    

    function editTransp(){
      editTrans(drvs)
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
            <h3><strong>Edit Tramsporter Details</strong></h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body   className="modalpadding">
        <Row>
      
      <Col md={6} xs={12}>

      <Form.Group className="mb-3" >
      <Form.Label className="flabl">Transporter's Name</Form.Label>
      <Form.Control defaultValue={v.transporter} name="transporter" onChange = {onchange}  className="finpt" type="text" placeholder="Transporter's Name" />
      </Form.Group>

      <Form.Group className="mb-3" >
      <Form.Label className="flabl">Email (Optional)</Form.Label>
      <Form.Control  defaultValue={v.email} name="email" onChange = {onchange}  className="finpt" type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3" >
      <Form.Label className="flabl">Contact Number One</Form.Label>
      <Form.Control  defaultValue={v.tcontact} name="tcontact" onChange = {onchange}  className="finpt" type="text" placeholder="Contact Number" />
      </Form.Group>

      <Form.Group className="mb-3" >
      <Form.Label className="flabl">Contact Person One (Optional)</Form.Label>
      <Form.Control defaultValue={v.contactp} name="contactp" onChange = {onchange}  className="finpt" type="text" placeholder="Contact Person" />
      </Form.Group>

      </Col>

      <Col md={6} xs={12}>

      <Form.Group className="mb-3" >
      <Form.Label className="flabl">Contact Number Two (Optional)</Form.Label>
      <Form.Control  defaultValue={v.tcontacttwo} name="tcontacttwo" onChange = {onchange}  className="finpt" type="text" placeholder="Contact Number" />
      </Form.Group>

      <Form.Group className="mb-3" >
      <Form.Label className="flabl">Contact Person Two (Optional)</Form.Label>
      <Form.Control defaultValue={v.contactptwo} name="contactptwo" onChange = {onchange}  className="finpt" type="text" placeholder="Contact Person" />
      </Form.Group>

      <Form.Group className="mb-3" >
      <Form.Label className="flabl">Contact Number Three (Optional)</Form.Label>
      <Form.Control  defaultValue={v.tcontactthree} name="tcontactthree" onChange = {onchange}  className="finpt" type="text" placeholder="Contact Number" />
      </Form.Group>

      <Form.Group className="mb-3" >
      <Form.Label className="flabl">Contact Person Three (Optional)</Form.Label>
      <Form.Control defaultValue={v.contactpthree} name="contactpthree" onChange = {onchange}  className="finpt" type="text" placeholder="Contact Person" />
      </Form.Group>

      </Col>


  </Row>
    
          <h2>{err}</h2>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={props.onHide} className="btn btn-danger btn-md">Close</Button>
          <Button onClick={editTransp} className="btn btn-success btn-md">Update Transporter</Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}