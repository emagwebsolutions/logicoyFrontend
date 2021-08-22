import React, {useReducer} from 'react'
import {Form,Col,Row,Button} from 'react-bootstrap'
import useUserslogic from './logic/useUserslogic'
import curuser from './curuser'

function reducer(state,action){
    return {...state, [action.name] : action.value}
}

export default function Profile(){
    const {user_id} = curuser()
    const {editpassword,err} = useUserslogic()
    const [state,dispatch] = useReducer(reducer,{})

  
    function onchange(e){
        const {name,value} = e.target
        dispatch({name,value})
    }



    function editPassword(){
      const ob = {...state,id:user_id}
      editpassword(ob)
    }

 

    return (
            <>

              <Row> 
                <Col xs={12}>
                  <div className="bg-light p-4">
                  <h3>Change Password</h3>
                  </div>
                </Col> 
              </Row>

              <br />


              <Row>

                  <Col md={6} xs={12}>

                  <Form.Group className="mb-3">
                  <Form.Label className="flabl">New Password</Form.Label>
                  <Form.Control  
                  name="password"   
                  className="finpt" 
                  type="text" 
                  onChange = {onchange} />
                  </Form.Group>

                  </Col>

                  <Col md={6} xs={12}>

                  <Form.Group className="mb-3">
                  <Form.Label className="flabl">Re-type Password</Form.Label>
                  <Form.Control 
                  name="repassword"  
                  onChange = {onchange} 
                  className="finpt"
                  type="text" 
                  />
                  </Form.Group>
           
                  
                  </Col>
              </Row>

              <br />

              <Row>
              <Col xs={12}>
              <h2>{err}</h2>
              <Button onClick={editPassword}  className="btn btn-success btn-md">Update Password
              </Button>
              </Col>
              </Row>

       </>
        )
}

