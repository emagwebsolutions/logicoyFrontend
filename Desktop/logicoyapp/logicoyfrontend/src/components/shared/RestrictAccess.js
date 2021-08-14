
import {useHistory} from 'react-router-dom'
export default function RestrictAccess(){
    const history = useHistory()

    const pageredirect = ()=>{
        if(!localStorage.length){
          history.push('/')
        }
    }

    const logout = ()=>{
        localStorage.clear()
        history.push('/')
    }

    const hidepage = ()=>{
        if(localStorage.getItem('userd')){
            const user = JSON.parse(localStorage.getItem('userd'))
            return { display: (user.role === 'Admin') ? "block" : "none" }
        }
    }

    const hidepage2 = ()=>{
        if(localStorage.getItem('userd')){
            const user = JSON.parse(localStorage.getItem('userd'))
            return { display: (user.role === 'Guest')? "none" : "block" }
        }
    }

    const accessdenied = ()=>{
        if(localStorage.getItem('userd')){
            const user = JSON.parse(localStorage.getItem('userd'))
            if(user.role !== 'Admin'){
                history.push('/')
            }
        }

    }

    return {pageredirect,logout,hidepage,accessdenied,hidepage2}
}