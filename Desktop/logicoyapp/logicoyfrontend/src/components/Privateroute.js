import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const Privateroute = ({component: Component, ...rest})=>{
    const login = localStorage.getItem('userToken')

    return (
            <Route 
                {...rest}
                render = { 
                    (props) => { 
                     return login ? <Component {...props} /> : <Redirect to="/" /> 
                    }
                }
            />
        )
}

export default Privateroute