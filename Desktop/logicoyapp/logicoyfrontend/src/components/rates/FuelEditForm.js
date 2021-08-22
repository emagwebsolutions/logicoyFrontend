import React, { useReducer} from 'react'
import { Form, Row, Modal, Button,Col} from 'react-bootstrap'
import useFuel from './logic/useFuel'

function reducer(state, action) {
  return { ...state, [action.name]: action.value }
}


export default function FuelEditForm(props) {
  const [state, dispatch] = useReducer(reducer, {})
  const {editfuelrate,err} = useFuel()


  const v = { ...props.output }

  function onchange(e) {
    const {name,value} = e.target
    dispatch({ name, value })
  }

  const cargor = {
    litre: state.litre || v.litre,
    fuelstation : state.fuelstation || v.fuelstation,
    rate: state.rate || v.rate,
    id: v._id
  }

  function editFuel() {
    editfuelrate(cargor)
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
            <h3><strong>Edit Fuel rates</strong></h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalpadding">


          <Row>
              <Col xs={12} md={2}>
              <Form.Group className="mb-3" >
              <Form.Label className="flabl">Litres</Form.Label>
              <Form.Control  name="litre" defaultValue={v.litre} onChange={onchange}  value="1"   type="text" placeholder="Litre" /> 
              </Form.Group>
              </Col>
    
              <Col xs={12} md={5}>
              <Form.Group className="mb-3">
              <Form.Label className="flabl">Fuel Station</Form.Label>
              <Form.Control  name="fuelstation" defaultValue={v.fuelstation} onChange={onchange} as="select" className="mb-3">
              <option value="" hidden>Select Fuel Station</option>
              <option value="Shell">Shell</option>
              <option value="Engene">Engene</option>
              </Form.Control>
              </Form.Group>
              </Col>


              <Col xs={12} md={5}>
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
          <Button onClick={editFuel} className="btn btn-success btn-md">Save </Button>
        </Modal.Footer>

      </Modal>
    </>
  )
}