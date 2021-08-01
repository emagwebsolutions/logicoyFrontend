import {useReducer} from 'react'
import useUserslogic from './useUserslogic'

function reducer(state,action){
    return {...state, [action.name] : action.value}
}


export default function useHeaderlogic(){
    const {registerUser,err} = useUserslogic()

    const [state,dispatch] = useReducer(reducer,{
        fullname: "",
        phone: "",
        hiredate: "",
        residence: "",
        role: "",
        email: "",
        password: "",
        repassword: ""
    })


    function onchange(e){
        const {value,name} = e.target
        dispatch({name,value})
    }

    function register(){
        registerUser(state)
    }

    return {register,onchange,err}
}