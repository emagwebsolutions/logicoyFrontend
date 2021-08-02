import React, {useReducer,useState} from 'react'
import {Form,Col,Row,Container,Button} from 'react-bootstrap'
import DateFormats from '../DateFormats'
import useUserslogic from './logic/useUserslogic'
import Navbars from '../Navbars'
import Footer from '../Footer'
import curuser from './curuser'
import {useSelector} from 'react-redux'
function reducer(state,action){
    return {...state, [action.name] : action.value}
}

export default function Profile(){
  const {user_id} = curuser()


const {editUser} = useUserslogic()
const [err,setErr] = useState("")
const uss = useSelector((state)=>state.users.allusers)
const output = {...uss}

     //Get single user by id
     const res = Object.values(output).filter(v => {
        if(user_id === v._id){
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
<>
<Navbars />
        <br />
  
            <Container className="bg-white p-4">
<Row>
  <Col md={8} xs={12} className="m-auto">



              <Row> 
                <Col xs={12}>
                  <div className="bg-light p-4">
                  <h3>Edit Profile</h3>
                  </div>
                </Col> 
              </Row>
              <br />
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

              <br />
              <Row>
              <Col xs={12}>
              <h2>{err}</h2>
              <Button onClick={()=>{editUser(obj,setErr)}}  className="btn btn-success btn-md">Update User
              </Button>
              </Col>
              </Row>

              </Col>

              </Row>
              </Container>

              <Footer />
              </>
        )
}

