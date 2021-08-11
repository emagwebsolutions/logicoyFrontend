import React from 'react'
import {Col} from 'react-bootstrap'
import DateFormats from '../DateFormats'
import useDashboardlogic from './logic/useDashboardlogic'

export default function Totaltrips(){
const {tottrips} = useDashboardlogic()

    const {months} = DateFormats()
    const d = new Date().getMonth()+1

    return ( 
        <Col xs={12} md={4}>
        <div className= "bg-success stat-bx text-center text-white">
            <h1>{tottrips}</h1>
            <h4>{months(d)}. Total Trips</h4>
        </div> 
        </Col>
    )
}

