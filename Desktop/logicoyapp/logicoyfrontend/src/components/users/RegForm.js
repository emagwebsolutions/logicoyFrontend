import React, {useReducer,useState} from 'react'
import {Form,Col,Row,Modal,Button} from 'react-bootstrap'
import DateFormats from '../DateFormats'
import useUserslogic from './logic/useUserslogic'

function reducer(state,action){
    return {...state, [action.name] : action.value}
}

export default function RegForm(props){

const {editUser} = useUserslogic()
const [err,setErr] = useState("")



     //Get single user by id
     const res = Object.values(props.output).filter(v => {
        if(props.id === v._id){
            return v
        }
        else{
            return ''
        }
        
    })
    const data = {...res[0]}


    //Get all input value
    const [state,dispatch] = useReducer(reducer,{
        fullname: "",
        phone: "",
        hiredate: "",
        residence: "",
        role: "",
        email: "",
        password: "",
        repassword: ""
      })

    //Get date formats
    const {ymd} = DateFormats()


    function onchange(e){
        const {name,value} = e.target
        dispatch({name,value})
    }


    const obj = {
        fullname: state.fullname? state.fullname : data.fullname,
        phone: state.phone? state.phone : data.phone,
        hiredate: state.hiredate? state.hiredate : data.hiredate,
        residence: state.residence? state.residence : data.residence,
        role: state.role? state.role : data.role,
        email: state.email? state.email : data.email,
        password: state.password ? state.password : "",
        repassword: state.repassword ? state.repassword : "",
        _id : data._id
      }
 

    return (

        
          <Modal
                  {...props}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
          
              >
              <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                  <h3><strong>New User</strong></h3>
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body   className="modalpadding">
              
             

              <Row>

                  <Col md={6} xs={12}>

                  
                  <Form.Group className="mb-3">
                  <Form.Label className="flabl">Fullname</Form.Label>
                  <Form.Control  
                  name="fullname"   
                  defaultValue={data.fullname}
                  className="finpt" 
                  type="text" 
                  placeholder="Full Name" 
                  onChange = {onchange} />
                  </Form.Group>

                  <Form.Group className="mb-3">
                  <Form.Label className="flabl">Phone</Form.Label>
                  <Form.Control  
                  name="phone" 
                  defaultValue={data.phone}
                  onChange = {onchange}  
                  className="finpt" 
                  type="phone" 
                  placeholder="Phone" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                  <Form.Label className="flabl">Email</Form.Label>
                  <Form.Control 
                  defaultValue={data.email}
                  name="email"  
                  onChange = {onchange}  
                  className="finpt" 
                  type="email"  
                  placeholder="Email" />
                  </Form.Group>

            

                  </Col>
                  <Col md={6} xs={12}>
                  
                  <Form.Group className="mb-3">
                  <Form.Label className="flabl">Hire Date</Form.Label>
                  <Form.Control 
                  name="hiredate" 
                  onChange = {onchange}  
                  type="date" 
                  defaultValue={ymd(data.hiredate)}
                  className="finpt"
                  placeholder="Hire Date" 
                  />
                  </Form.Group>

                  <Form.Group className="mb-3">
                  <Form.Label className="flabl">Residence</Form.Label>
                  <Form.Control 
                  name="residence"  
                  defaultValue={data.residence}
                  onChange = {onchange} 
                  className="finpt"
                  type="text" 
                  placeholder="Residence" 
                  />
                  </Form.Group>


                  <Form.Group className="mb-3">
                  <Form.Label className="flabl">Role</Form.Label>
                  <Form.Control 
                  name="role" 
                  defaultValue={data.role}
                  onChange = {onchange} 
                  as="select" 
                  className="mb-3">
                  <option hidden>Select role</option>
                  <option >User</option>
                  <option >Admin</option>
                  <option >Guest</option>
                  </Form.Control>
                  </Form.Group>


           
                  
                  </Col>
              </Row>
              
              <h2>{err }</h2>

              </Modal.Body>
              <Modal.Footer>
                  <Button onClick={props.onHide} className="btn btn-danger btn-md">Close</Button>
                  <Button onClick={()=>{editUser(obj,setErr)}}  className="btn btn-success btn-md">Update User</Button>
              </Modal.Footer>
              </Modal>

        )
}

