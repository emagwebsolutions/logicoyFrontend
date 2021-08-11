import React from 'react'
import { Form, Col, Row, Modal} from 'react-bootstrap'
import DateFormats from '../DateFormats'


export default function ViewJobForm(props) {

   //Get date formats
   const {ymd} = DateFormats()
   var v = { ...props.output }



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
            <h3><strong>Completed Job</strong></h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalpadding">

          <Row>
            <Col md={6} xs={12}>

              <Form.Group className="mb-3">
                <Form.Label className="flabl">Cargo owner</Form.Label>
                <Form.Control value={v.fullname} name="fullname"  className="finpt" type="text" placeholder="Client's Name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="flabl">Customer's Name</Form.Label>
                <Form.Control value={v.customer} name="fullname"  className="finpt" type="text" placeholder="Client's Name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="flabl">Transporter</Form.Label>
                <Form.Control value={v.transporter}  name="transporter"  className="finpt" type="text" placeholder="Transporter" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="flabl">Transporter's Contact</Form.Label>
                <Form.Control value={v.tcontact}  name="tcontact"  className="finpt" type="text" placeholder="Transporter's Contact" />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label className="flabl">Bags/Tonnage Loaded</Form.Label>
                <Form.Control value={v.bags} name="bags"  className="finpt" type="number" placeholder="Bags/Tonnage Loaded" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="flabl">Destination</Form.Label>
                <Form.Control value={v.destination} name="destination"   className="mb-3">
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="flabl">Truck Number</Form.Label>
                <Form.Control value={v.trucknumber} name="trucknumber"   className="mb-3">
                </Form.Control>
              </Form.Group>

            </Col>
            <Col md={6} xs={12}>

              <Form.Group className="mb-3">
                <Form.Label className="flabl">Driver's Name</Form.Label>
                <Form.Control name="driver" value={v.driver}   className="mb-3 finpt">
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label className="flabl">Driver's Contact</Form.Label>
                <Form.Control   value={v.dcontact}  name="dcontact"  className="finpt" type="text" placeholder="Driver's Contact" />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label className="flabl">Driver License Number</Form.Label>
                <Form.Control value={v.license}  name="license"  className="finpt" type="text" placeholder="Driver License Number" />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label className="flabl">Fuel (Optional)</Form.Label>
                <Form.Control value={v.fuel} name="fuel"  className="finpt" type="number" placeholder="Fuel" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="flabl">Fuel Station (Optional)</Form.Label>
                <Form.Control value={v.fuelstation} name="fuelstation"  className="mb-3">
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="flabl">Date</Form.Label>
                <Form.Control 
                value={ymd(v.date)}
                name="date" 
                  type="text" className="finpt" placeholder="Date"
                />
              </Form.Group>

   

            </Col>
          </Row>


        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>

      </Modal>
    </>
  )
}