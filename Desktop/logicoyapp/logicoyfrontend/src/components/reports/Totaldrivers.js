import React from 'react'
import {Col} from 'react-bootstrap'
import DateFormats from '../DateFormats'
import useReports from './logic/useReports'

export default function Totaldrivers(){
    const {totdrivers} = useReports()
    const {months} = DateFormats()
    const d = new Date().getMonth()+1
   
    return ( 
        <Col xs={12} md={6}>
        <div className= "bg-white stat-bx text-center text-muted">
            <h1>{totdrivers}</h1>
            <h4>{months(d)}. Total drivers recorded</h4>
        </div>
        </Col>
    )
}

