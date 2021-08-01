import React from 'react'
import {Col} from 'react-bootstrap'

export default function Stats({bg,total,description,col}){
    return ( 
        <Col xs={12} md={col}>
        <div className= {`${bg} stat-bx text-center text-white`}>
            <h1>{total}</h1>
            <h4>{description}</h4>
        </div>
        </Col>
    )
}

