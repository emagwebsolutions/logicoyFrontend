import React from 'react'
import {Alert} from 'react-bootstrap'

 const Error = (props)=>{

    return (
        <Alert variant={props.bgcolor}>
            <Alert.Heading>
            {props.message}
            </Alert.Heading>
        </Alert>
    )

}
export default Error
