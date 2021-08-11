import React from 'react'
import {Card,ListGroup,Form} from 'react-bootstrap'

export default function List(props){
    return (  
        <>


        <Form.Group className="mb-3" >
        <Form.Control className="finpt" type="text"
        onChange={props.searchbx}
        placeholder="Search Transporters" />
        </Form.Group>


        <Card>
        <ListGroup variant="flush" className="transporters-scroll">
            <ListGroup.Item>
            {props.DATA}
            </ListGroup.Item>
        </ListGroup>
        </Card>

        
        </>
    )
}

