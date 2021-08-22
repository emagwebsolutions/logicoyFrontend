import React, { useReducer,useState} from 'react'
import { Form, Row, Modal, Button,Col} from 'react-bootstrap'
import useCargo from './logic/useCargo'

function reducer(state, action) {
  return { ...state, [action.name]: action.value }
}


export default function CargoEditForm(props) {
  const [state, dispatch] = useReducer(reducer, {})
  const {editcargorate,err} = useCargo()
  const [type,settype] = useState("")

  const v = { ...props.output }

  function onchange(e) {
    const { name, value } = e.target
    if(name === 'owner')
    value.toLowerCase() === 'olam'? settype('Bags') : settype('Tonage')
    dispatch({ name, value })
  }

  const cargor = {
    owner: state.owner || v.owner,
    type: state.type || v.type,
    destination: state.destination || v.destination,
    rate: state.rate || v.rate,
    id: v._id
  }

  function editCargo() {
    editcargorate(cargor)
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
            <h3><strong>Edit Cargo rates</strong></h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalpadding">


        <Row>
    
            <Col xs={12} md={4}>
            <Form.Group className="mb-3">
            <Form.Label className="flabl">Cargo Owner</Form.Label>
            <Form.Control value={v.owner}  name="owner" onChange = {onchange} type="text"  className="mb-3" />
            </Form.Group>
            </Col>
   
            <Col xs={12} md={2}>
            <Form.Group className="mb-3">
            <Form.Label className="flabl">Type</Form.Label>
            <Form.Control  name="type" value={type || v.type} onChange={onchange}  type="text"  />
            </Form.Group>
            </Col>
  
            <Col xs={12} md={4}>
            <Form.Group className="mb-3">
            <Form.Label className="flabl">Destination</Form.Label>
            <Form.Control  name="destination" value={v.destination} onChange = {onchange}  type="text" className="mb-3" />
            </Form.Group>
            </Col>

            <Col xs={12} md={2}>
            <Form.Group className="mb-3">
            <Form.Label className="flabl">Rate</Form.Label>
            <Form.Control name="rate" defaultValue={v.rate} onChange = {onchange}  type="number"  />
            </Form.Group>
            </Col>

        </Row>


          <h2>{err}</h2>

        </Modal.Body>
        <Modal.Footer>

          <Button onClick={props.onHide} className="btn btn-danger btn-md">Close</Button>
          <Button onClick={editCargo} className="btn btn-success btn-md">Save </Button>
        </Modal.Footer>

      </Modal>
    </>
  )
}