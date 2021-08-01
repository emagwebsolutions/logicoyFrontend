import React,{useState,useReducer} from "react"
import axios from 'axios'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import Error from './Error'


function reducer(state,action){
    return {...state, [action.name] : action.value}
}

export default function Loginlogic({history}){
    const [err,setErr] = useState("")
    const [user,dispatch] = useReducer(reducer,{})

    const onchangex = (e) => {
        const {value,name} = e.target
        dispatch({name,value})
    }


    
        const loginfunc = async (e) => {
            e.preventDefault()

            const config = {
                header: {"Content-Type": "application/json"}
            }

            try{
                const {data} = await axios.post("http://localhost:8080/api/private/Login/", user, config)
                if(data.success === true){
                    localStorage.setItem('userToken', data.token)
                    localStorage.setItem("userd", JSON.stringify(data.user))
                    history.push("/dashboard")
                }
                if(data.success === false){
                    setErr(<Error message={data.mess} bgcolor="danger" />)
                    setTimeout(()=>setErr(""), 4000)
                }
               
            }
            catch(err){
                console.log(err.message)
            }
           
        }


    return {err,onchangex,loginfunc}
}

