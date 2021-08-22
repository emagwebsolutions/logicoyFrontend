import React from 'react' 
import {Form} from 'react-bootstrap'
const Drivereditlist = ({onchangex,v,dta})=>{
    return (
        <>
            <Form.Group className="mb-3">
                <Form.Label className="flabl">Driver's Name</Form.Label>
                <Form.Control name="driver" defaultValue={v.driver} onChange={onchangex} as="select" className="mb-3">
                  {
                    Object.values(dta).map(val => {
                      return <option key={val._id} value={val.driver}>{val.driver}</option>
                    })
                  }
                </Form.Control>
              </Form.Group>
        </>
    )
}
export default Drivereditlist