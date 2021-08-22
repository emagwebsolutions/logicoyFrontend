import React  from 'react'
import { Form, Col, Row, Modal } from 'react-bootstrap'
import DateFormats from '../DateFormats'


export default function ViewJobForm(props) {



   //Get date formats
   const {ymd} = DateFormats()
   var v = { ...props.output }

  
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
            <h3><strong>Completed Job</strong></h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalpadding">

          <Row>
            <Col md={6} xs={12}>
      
            <Form.Group>
            <Form.Label>Cargo Owner</Form.Label>
            <Form.Control value={v.fullname} />
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label className="flabl">Customer (Optional)</Form.Label>
            <Form.Control  value={v.customer} name="customer" onChange = {onchange}  as="textarea" rows="3" placeholder="You can enter more customer names seperated by commas e.g Joe,Edward,Osei" />
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
              <Form.Label className="flabl">{loadtype} loaded</Form.Label>
                <Form.Control value={v.bags} name="bags"  className="finpt" type="number" placeholder="Bags/Tonnage Loaded" />
              </Form.Group>

              <Form.Group>
              <Form.Label>Destination</Form.Label>
              <Form.Control value={v.destination} />
              </Form.Group>

        
   

            </Col>
            <Col md={6} xs={12}>

              <Form.Group>
              <Form.Label>Truck Number</Form.Label>
              <Form.Control value={v.trucknumber} />
              </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label className="flabl">Driver</Form.Label>
                <Form.Control   value={v.driver}  name="dcontact"  className="finpt" type="text" placeholder="Driver's Contact" />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label className="flabl">Driver's Contact</Form.Label>
                <Form.Control   value={v.dcontact}  name="dcontact"  className="finpt" type="text" placeholder="Driver's Contact" />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label className="flabl">Driver License Number (Optional)</Form.Label>
                <Form.Control value={v.license}  name="license"  className="finpt" type="text" placeholder="Driver License Number" />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label className="flabl">Fuel (Optional)</Form.Label>

                <div class="row">
                <div md={6}>
                <Form.Control value={v.fuel} name="fuel"  className="finpt" type="text" placeholder="Fuel" />
                </div>

                <div md={6}>
                <Form.Control name="type2"  value={v.type2} type="text" />
    
                </div>
              
                </div>

              </Form.Group>

              <Form.Group>
              <Form.Label>Fuel Station</Form.Label>
              <Form.Control value={v.fuelstation} />
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