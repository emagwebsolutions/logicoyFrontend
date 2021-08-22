import React, {useReducer} from 'react'
import {Form,Col,Row,Button} from 'react-bootstrap'
import DateFormats from '../DateFormats'
import useUserslogic from './logic/useUserslogic'
import curuser from './curuser'
import {useSelector} from 'react-redux'
function reducer(state,action){
    return {...state, [action.name] : action.value}
}

export default function Profile(){
  const {user_id} = curuser()
  const {editUser,err} = useUserslogic()
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
    const [state,dispatch] = useReducer(reducer,{})

    //Get date formats
    const {ymd} = DateFormats()


    function onchange(e){
        const {name,value} = e.target
        dispatch({name,value})
    }


    const obj = {
        fullname: state.fullname || data.fullname,
        phone: state.phone  ||  data.phone,
        hiredate: state.hiredate  ||  data.hiredate,
        residence: state.residence  ||  data.residence,
        role: state.role  ||  data.role,
        email: state.email  ||  data.email,
        _id : data._id
      }


      function edituser(){
        editUser(obj)
      }


    return (
          <>


              <Row> 
                <Col xs={12}>
                  <div className="bg-light p-4">
                  <h3>Profile Details</h3>
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
                  value={data.fullname}
                  className="finpt" 
                  type="text" 
                  placeholder="Full Name" 
                  onChange = {onchange} />
                  </Form.Group>

                  <Form.Group className="mb-3">
                  <Form.Label className="flabl">Phone</Form.Label>
                  <Form.Control  
                  name="phone" 
                  value={data.phone}
                  onChange = {onchange}  
                  className="finpt" 
                  type="phone" 
                  placeholder="Phone" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                  <Form.Label className="flabl">Email</Form.Label>
                  <Form.Control 
                  value={data.email}
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
                  type="text" 
                  value={ymd(data.hiredate)}
                  className="finpt"
                  placeholder="Hire Date" 
                  />
                  </Form.Group>

                  <Form.Group className="mb-3">
                  <Form.Label className="flabl">Residence</Form.Label>
                  <Form.Control 
                  name="residence"  
                  value={data.residence}
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
                  value={data.role}
                  onChange = {onchange} 
                  type="text"
                  className="mb-3" />
                  </Form.Group>


           
                  
              </Col>
              </Row>

              <br />
              <Row>
              <Col xs={12}>
              <h2>{err}</h2>
              <Button onClick={edituser} disabled  className="btn btn-success btn-md">Update User
              </Button>
              </Col>
              </Row>
    
              </>
        )
}

