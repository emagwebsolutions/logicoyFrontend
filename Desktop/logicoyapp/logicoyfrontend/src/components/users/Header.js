import React,{useState} from 'react'
import {Form,Col,Row,Modal,Button,Container} from 'react-bootstrap'
import useHeaderlogic from './logic/useHeaderlogic'
import Tables from './Tables'
import useSearchHook from '../useSearchHook'
import {useSelector} from 'react-redux'


export default function Header(props){
    const [modalShow, setModalShow] = useState(false);
    const {register,onchange,err} = useHeaderlogic()

    const users = useSelector((state)=> state.users.allusers)
    const {output,searchdatalist} = useSearchHook(users)


    function onHide(){
        setModalShow(false)
    }


  /*##############################################
  SEARCH BEGINS 
  ##############################################*/

  /*##############################################
  SEARCH ENDS
  ##############################################*/

    return (
        <>
        <br />
        <Container className="p-3 bg-primary">
            <Row>
                <Col md={3} xs={12}>
                <h2 className="text-white">User Management</h2>
                </Col>

                <Col md={4} xs={12}>
                    <Form.Group>
                        <Form.Control type="text" onChange={searchdatalist} placeholder="Search Users" />
                    </Form.Group>
                </Col>

                <Col md={3} xs={12}>

                </Col>

                <Col md={2} xs={12}>

                {/*#####################################
                BEGIN MODAL BOX
                #####################################*/}

                <Button onClick={() => setModalShow(true)}  className="btn btn-secondary btn-lg">New User</Button>

                <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={modalShow}
                    onHide={onHide}
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
                    className="finpt" 
                    type="text" 
                    placeholder="Full Name" 
                    onChange = {onchange} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Label className="flabl">Phone</Form.Label>
                    <Form.Control  
                    name="phone" 
                    onChange = {onchange}  
                    className="finpt" 
                    type="phone" 
                    placeholder="Phone" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Label className="flabl">Email</Form.Label>
                    <Form.Control 
                    name="email"  
                    onChange = {onchange}  
                    className="finpt" 
                    type="email"  
                    placeholder="Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                    <Form.Label className="flabl">Password</Form.Label>
                    <Form.Control 
                    name="password"  
                    onChange = {onchange} 
                    className="finpt"
                    type="text" 
                    placeholder="Password" />
                    </Form.Group>

                    </Col>
                    <Col md={6} xs={12}>
                    
                    <Form.Group className="mb-3">
                    <Form.Label className="flabl">Hire Date</Form.Label>
                    <Form.Control 
                    name="hiredate" 
                    onChange = {onchange}  
                    type="date" 
                    className="finpt"
                    placeholder="Hire Date" 
                    />
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Label className="flabl">Residence</Form.Label>
                    <Form.Control 
                    name="residence"  
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
                    onChange = {onchange} 
                    as="select" 
                    className="mb-3">
                    <option hidden>Select role</option>
                    <option >User</option>
                    <option >Admin</option>
                    <option >Guest</option>
                    </Form.Control>
                    </Form.Group>


                    <Form.Group className="mb-3">
                    <Form.Label 
                    className="flabl">
                    Re-type Password
                    </Form.Label>
                    <Form.Control 
                    name="repassword"  
                    onChange = {onchange} 
                    className="finpt"
                    type="text" 
                    placeholder="Re-type password" />
                    </Form.Group>
                    
                    </Col>
                </Row>
                
                <h2>{err}</h2>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onHide} className="btn btn-danger btn-md">Close</Button>
                    <Button onClick={register}  className="btn btn-success btn-md">Save </Button>
                </Modal.Footer>
                </Modal>
                {/*#####################################
                END MODAL BOX
                #####################################*/}


                </Col>               
            </Row>
        </Container>


        <Container className="bg-white">
        <Row>
            <Col  xs={12} className="m-auto">
            <Tables output = {output} />
            </Col> 
        </Row>
        </Container>
        </>
    )
}