import React,{useState} from 'react'
import axios from 'axios'
import Error from '../../Error'
export default function useJobslogic(){
  const [err,setErr] = useState("")
  


  /*----------------------------------
  *Start EDIT jobS
  ----------------------------------*/
  const approvejob = async (obj)=>{
        const config = {
          header:{
            "Content-Type": "application/json"
          }
        }
        try{
          const {data} = await axios.put("http://localhost:8080/api/public/editjobs/",obj,config)
          if(data.success === true){
            setErr(<Error message={data.mess} bgcolor="success" />)
            
          }
          if(data.success === false){
            setErr(<Error message={data.mess} bgcolor="danger" />)
          }
          setTimeout(()=> setErr(""),4000)
        }
        catch(err){
          console.log(err.message)
        }
  }
  /*----------------------------------
  *End EDIT USER
  ----------------------------------*/


  return {approvejob,err}
}