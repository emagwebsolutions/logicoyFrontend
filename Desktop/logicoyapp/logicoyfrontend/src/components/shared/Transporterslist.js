import React from 'react'
import {Form} from 'react-bootstrap'

export default function Transporterslist({dvax,onchangex}){

    return (
        <>
        <Form.Group className="mb-3">
        <Form.Label className="flabl">Transporter</Form.Label>
        <Form.Control name="transporter"  onChange = {onchangex} as="select" className="mb-3">
          <option value="" hidden> Select transporter</option>
        {
          Object.values(dvax).map(v => {
            return <option key={v._id} value={v.transporter}>{v.transporter}</option>
          })
        }
        </Form.Control>
        </Form.Group>
        </>
    )
}