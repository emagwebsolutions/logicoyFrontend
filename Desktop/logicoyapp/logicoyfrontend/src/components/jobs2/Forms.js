import React,{useState,useReducer} from 'react'
import {Form,Col,Row,Modal,Button} from 'react-bootstrap'
import axios from 'axios'
import Error from '../Error'

function reducer(state,action){
  return {...state, [action.name] : action.value}
}

export default function Forms(props) {


  var user = (localStorage.getItem('userd')) ? JSON.parse(localStorage.getItem('userd')) : {} 

  const creator = {
    creatorid: user._id,
    createdby: user.fullname,
    creatorphone: user.phone
  }



  const [bills,dispatch] = useReducer(reducer,{
    fullname : "",
    transporter : "",
    tcontact : "",
    bags : "",
    destination : "",
    trucknumber : "",
    driver : "",
    dcontact : "",
    license : "",
    fuel : "",
    fuelstation : "",
    date : ""
  })
  const [err,setErr] = useState("")

  function onchange(e){
    const {name,value} = e.target
    dispatch({name,value})
  }

//Add waybill to database
  const addwaybill = async (e) => {
 
      try{

        const config = {
          header: {
            "Content-Type" : "application/json"
          }
        }

        const {data} = await axios.post("http://localhost:8080/api/public/savejobs/",{...bills,...creator},config)
        if(data.success === true){
          setErr(<Error message={data.mess} bgcolor="success" />)
          props.setTrans(data.data)
        }
        if(data.success===false){
          setErr(<Error message={data.mess} bgcolor="danger" />)
        }
        setTimeout(()=>setErr(""), 4000)
      }
      catch(err){
        console.log(err.message)
      }
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



            {/* <label>
            Choose a browser from this list
            <input list="browsers" onChange={getDrivers} name="myBrowser" />
            <datalist id="browsers">
            <option value="Chrome" />
            <option value="Firefox" />
            </datalist>
            </label> */}

            <Form.Group className="mb-3">
            <Form.Label className="flabl">Client's Name</Form.Label>
            <Form.Control   name="fullname" onChange = {onchange}  className="finpt" type="text" placeholder="Client's Name" />
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label className="flabl">Transporter</Form.Label>
            <Form.Control  name="transporter" onChange = {onchange}  className="finpt" type="text" placeholder="Transporter" />
            </Form.Group>


            <Form.Group className="mb-3">
            <Form.Label className="flabl">Transporter's Contact</Form.Label>
            <Form.Control  name="tcontact" onChange = {onchange}    className="finpt" type="text" placeholder="Transporter's Contact" />
            </Form.Group>


            <Form.Group className="mb-3" >
            <Form.Label className="flabl">Bags/Tonnage Loaded</Form.Label>
            <Form.Control  name="bags" onChange = {onchange}  className="finpt" type="text" placeholder="Bags/Tonnage Loaded" />
            </Form.Group>

      

            <Form.Group className="mb-3">
            <Form.Label className="flabl">Destination</Form.Label>
            <Form.Control name="destination" onChange = {onchange} as="select" className="mb-3">
            <option value="" hidden>Select destination</option>
            <option value="Accra">Accra</option>
            <option value="Kumasi">Kumasi</option>
            <option value="Takoradi">Takoradi</option>
            <option value="Sunyani">Sunyani</option>
            <option value="Tamale">Tamale</option>
            <option value="Koforidua">Koforidua</option>
            <option value="Cape Coast">Cape Coast</option>
            </Form.Control>
            </Form.Group>




            <Form.Group className="mb-3" >
            <Form.Label className="flabl">Truck Number</Form.Label>
            <Form.Control  name="trucknumber" onChange = {onchange}  className="finpt" type="text" placeholder="Truck Number" />
            </Form.Group>

        

            

            </Col>
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

            <Form.Group className="mb-3" >
            <Form.Label className="flabl">Fuel (Optional)</Form.Label>
            <Form.Control  name="fuel" onChange = {onchange}  className="finpt" type="text" placeholder="Fuel" />
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label className="flabl">Fuel Station (Optional)</Form.Label>
            <Form.Control name="fuelstation" onChange = {onchange} as="select" className="mb-3">
            <option value="" hidden>Select Filling Station</option>
            <option value="Shell">Shell</option>
            <option value="Engene">Engene</option>
            </Form.Control>
            </Form.Group>

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
          <Button onClick={addwaybill}  className="btn btn-success btn-md">Save </Button>
        </Modal.Footer>

      </Modal>
        </>
    )
}