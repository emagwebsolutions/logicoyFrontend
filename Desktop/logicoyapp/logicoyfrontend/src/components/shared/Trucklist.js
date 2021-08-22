import React from 'react' 
import {Form} from 'react-bootstrap'

const Trucklist = ({trcks,onchangex})=>{
    return (
        <>
           <Form.Group className="mb-3">
            <Form.Label className="flabl">Truck Number</Form.Label>
            <Form.Control  name="trucknumber" onChange = {onchangex} as="select" className="mb-3">
            <option hidden>Select a truck</option>
              {   
              Object.values(trcks).map(v =>{
                return <option key={v._id} value={v.trucknumber}>{v.trucknumber}</option>
              })
              }
            </Form.Control>
            </Form.Group>
        </>
    )
}
export default Trucklist