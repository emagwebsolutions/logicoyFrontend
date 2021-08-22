import React from 'react' 
import {Form} from 'react-bootstrap'


const Driverlist = ({dta,onchangex})=>{
    return (
        <>
            <Form.Group className="mb-3">
            <Form.Label className="flabl">Driver's Name</Form.Label>
            <Form.Control  name="driver" onChange = {onchangex} as="select" className="mb-3">
              <option hidden>Select Driver</option>
              {   
                Object.values(dta).map(v => {
                    return <option key={v._id} value={v.driver}>{v.driver}</option>
                })
              }
            </Form.Control>
            </Form.Group>
        </>
    )
}
export default Driverlist