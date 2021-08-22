import React from 'react' 
import {Form} from 'react-bootstrap'
const Trucklist = ({onchangex,v})=>{
    return (
        <>
              <Form.Group className="mb-3">
                <Form.Label className="flabl">Fuel Station (Optional)</Form.Label>
                <Form.Control defaultValue={v.fuelstation} name="fuelstation" onChange={onchangex} as="select" className="mb-3">
                  <option value="" hidden>Select Filling Station</option>
                  <option value="Shell">Shell</option>
                  <option value="Engene">Engene</option>
                </Form.Control>
              </Form.Group>
        </>
    )
}
export default Trucklist