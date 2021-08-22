import React from 'react' 
import {Form} from 'react-bootstrap'

const Truckeditlist = ({onchangex,dta,v})=>{
    return (
        <>
        <Form.Group className="mb-3">
                <Form.Label className="flabl">Truck Number</Form.Label>
                <Form.Control value={v.trucknumber} name="trucknumber" onChange={onchangex} as="select" className="mb-3">
                  {
                    Object.values(dta).map(val => {
                      return <option key={val._id} value={val.trucknumber}>{v.trucknumber}</option>
                    })
                  }
                </Form.Control>
         </Form.Group>
        </>
    )
}
export default Truckeditlist