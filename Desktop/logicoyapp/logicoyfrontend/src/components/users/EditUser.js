import React from 'react'
import Error from '../Error'
import Forms from './Forms'
import axios from "axios"


/*---------------------------------
*Start Form function
---------------------------------*/
export default function AddUser(props) {
  /*----------------------------------
  *Start save users into database
  ----------------------------------*/
  const [err,setErr] = useState("")
  const saveUser = async ()=>{
      const res = usersValid(users)
      if(res){
        const config = {
          header:{
            "Content-Type": "application/json"
          }
        }
        try{
          const {data} = await axios.post("http://localhost:8080/api/public/register/",{
            fullname: users.fullname,
            phone: users.phone,
            hiredate: users.hiredate,
            residence: users.residence,
            role: users.role,
            email: users.email,
            password: users.password
          },config)
          if(data.success){
            setErr(<Error message={data.mess} bgcolor="success" />)
          }
          else{
            setErr(<Error message={data.mess} bgcolor="danger" />)
          }
          
        }
        catch(err){
          console.log(err.message)
        }

       
        setTimeout(()=>{
            setErr("")
        },4000)
      }
      else{
        setErr(<Error message="All fields required!" bgcolor="danger" />)
        setTimeout(()=>{
          setErr("")
        },5000)
      }
  }
  /*----------------------------------
  *End save users into database
  ----------------------------------*/
    return (
       <Forms />
    )
  }
  /*---------------------------------
  *End Form function
  ---------------------------------*/