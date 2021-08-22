import React from 'react' 
import {Form} from 'react-bootstrap'

const Ownerlist = ({onchangex})=>{
    return (
        <>
        <Form.Group className="mb-3">
            <Form.Label className="flabl">Cargo Owner</Form.Label>
            <Form.Control  name="fullname" onChange = {onchangex} as="select" className="mb-3">
            <option hidden>Select Cargo Owner</option>
            <option value="OLAM">OLAM</option>
            <option value="WILMAR">WILMAR</option>
            </Form.Control>
        </Form.Group>
        </>
    )
}
export default Ownerlist