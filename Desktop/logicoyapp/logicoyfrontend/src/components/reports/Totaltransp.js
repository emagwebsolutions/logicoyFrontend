import React from 'react'
import {Col} from 'react-bootstrap'
import DateFormats from '../DateFormats'
import useReports from './logic/useReports'

export default function Totaltransp(){
    const {tottransp} = useReports()
    const {months} = DateFormats()
    const d = new Date().getMonth()+1
   
    return ( 
        <Col xs={12} md={6}>
        <div className= "bg-white stat-bx text-center text-muted">
            <h1>{tottransp}</h1>
            <h4>{months(d)}. Total transporters recorded</h4>
        </div>
        </Col>
    )
}

