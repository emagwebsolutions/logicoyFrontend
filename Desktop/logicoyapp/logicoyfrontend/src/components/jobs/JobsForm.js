import React,{useReducer,useState} from 'react'
import {Form,Col,Row,Modal,Button} from 'react-bootstrap'
import useJobslogic from './logic/useJobslogic'
import {useSelector} from 'react-redux'

import Ownerlist from '../shared/Ownerlist'
import Trucklist from '../shared/Trucklist'
import Destinationlist from '../shared/Destinationlist'
import Driverlist from '../shared/Driverlist'
import Fuellist from '../shared/Fuellist'


function reducer(state,action){
  return {...state, [action.name] : action.value}
}


export default function JobsForm(props){
  const [trns,setrans] = useState("")
  const [loaded,setloaded] = useState("")
  const [drv,setdrv] = useState("")
  const cc = useSelector((state)=> state.drivers.alldrivers)
  const dta = {...cc}

  const tr = useSelector((state)=> state.trucks.alltrucks)
  const trcks = {...tr}

  
    const [state,dispatch] = useReducer(reducer, {})
    const {addjob,err} = useJobslogic()
      function onchange(e){
        const {name,value} = e.target

        if(name === 'trucknumber'){
          setrans("")
          const rr = Object.values(trcks).filter(v => {
            return v.trucknumber === value
          })
          setrans(rr[0])
        }

        if(name === 'driver'){
          setdrv("")
          const rr = Object.values(dta).filter(v => {
            return v.driver === value
          })
          setdrv(rr[0])
        }

        if(name === 'fullname'){
          const load = value.toLowerCase()==='olam' ? 'Bags' : 'Tonage'     
          setloaded(load)
        }

        dispatch({name,value})
      }
   
 

      function addJobs(){
        
          const st = {
              fullname:  state.fullname ||  '',
              customer:  state.customer  || '',
              transporter:  trns.transporter || '',
              tcontact:  trns.tcontact || '',
              bags:  state.bags || '',
              destination:  state.destination || '',
              trucknumber:  state.trucknumber ||  '',
              driver:  drv.driver || '',
              dcontact:  drv.dcontact || '',
              license:  drv.license || '',
              fuel:  state.fuel || '',
              type2: state.type2 || '',
              fuelstation:  state.fuelstation || '',
              date: state.date || ''
          }

    
          addjob(st)
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
  
            <Ownerlist onchangex={onchange} />

            <Form.Group className="mb-3">
            <Form.Label className="flabl">Customer (Optional)</Form.Label>
            <Form.Control  as="textarea" rows="3"  name="customer" onChange = {onchange}   placeholder="You can enter more customer names seperated by commas e.g Joe,Edward,Osei" />
            </Form.Group>

  
            <Form.Group className="mb-3">
            <Form.Label className="flabl">Transporter</Form.Label>
            <Form.Control value={trns? trns.transporter : ''} disabled name="transporter" onChange = {onchange}  className="finpt" type="text" placeholder="Transporter" />
            </Form.Group>
  
            <Form.Group className="mb-3">
            <Form.Label className="flabl">Transporter's Contact</Form.Label>
            <Form.Control  name="tcontact" value={trns? trns.tcontact : ''} disabled onChange = {onchange}    className="finpt" type="text" placeholder="Transporter's Contact" />
            </Form.Group>
  
            <Form.Group className="mb-3" >
            <Form.Label className="flabl">{loaded || 'Bags'} loaded</Form.Label>
            <Form.Control  name="bags" onChange = {onchange}  className="finpt" type="number"  />
            </Form.Group>
    
            <Destinationlist onchangex={onchange} />
      
  
            </Col>
            <Col md={6} xs={12}>
            <Trucklist onchangex={onchange} trcks={trcks} />
          
            <Driverlist onchangex={onchange} dta={dta} />

  
            <Form.Group className="mb-3" >
            <Form.Label className="flabl">Driver's Contact</Form.Label>
            <Form.Control   name="dcontact" value={drv? drv.dcontact : ''}  disabled onChange = {onchange}  className="finpt" type="text" placeholder="Driver's Contact" />
            </Form.Group>
  
            <Form.Group className="mb-3" >
            <Form.Label className="flabl">Driver License Number (Optional)</Form.Label>
            <Form.Control value={drv? drv.license : ''} disabled name="license" onChange = {onchange}  className="finpt" type="text" placeholder="Driver License Number" />
            </Form.Group>
  
            <Form.Group className="mb-3" >
  
            <Form.Label className="flabl">Fuel (Optional)</Form.Label>

            <div class="row">
            <div md={6}>
            <Form.Control  name="fuel" onChange = {onchange}  className="finpt" type="number" placeholder="Fuel" />
            </div>

            <div md={6}>
            <Form.Control name="type2" onChange = {onchange} as="select">
              <option hidden>Type</option>
              <option value="Litre">Litre</option>
              <option value="Cash">Cash</option>
            </Form.Control>
            </div>
            </div>

            </Form.Group>
  
            <Fuellist onchangex={onchange} />
  
            <Form.Group className="mb-3">
            <Form.Label className="flabl">Date</Form.Label>
            <Form.Control name="date" onChange = {onchange}  
            type="date" className="finpt" placeholder="Date" 
             />
            </Form.Group>

            </Col>
        </Row>
  
        <h2>{err}</h2>
      
        </Modal.Body>
        <Modal.Footer>
       
          <Button onClick={props.onHide} className="btn btn-danger btn-md">Close</Button>
          <Button onClick={addJobs}  className="btn btn-success btn-md">Save </Button>
        </Modal.Footer>
  
      </Modal>
        </>
    )
}