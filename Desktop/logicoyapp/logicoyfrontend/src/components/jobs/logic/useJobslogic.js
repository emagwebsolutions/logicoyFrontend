import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Error from '../../Error'
import curuser from '../../users/curuser'
import useData from '../../redux/useData'
export default function useJobslogic(){
  const [err,setErr] = useState("")
  const {JobsData} = useData()
  const {creator} = curuser()



  /*----------------------------------
  *Start DATA INITIALIZATION
  ----------------------------------*/
  useEffect(()=>{
    JobsData()
  },[])
/*----------------------------------
*End DATA INITIALIZATION
----------------------------------*/


  /*----------------------------------
  *Start REGISTER jobS
  ----------------------------------*/
  const addjob = async (job)=>{
    
        const config = {
          header:{
            "Content-Type": "application/json"
          }
        }
        try{
        const obj = {...job,...creator}
   
      const {data} = await axios.post("http://localhost:8080/api/public/addjobs/",obj,config)
          
          if(data.success){
            setErr(<Error message={data.mess} bgcolor="success" />)   
            JobsData()
          }
          else{
            setErr(<Error message={data.mess} bgcolor="danger" />)
          }
        }
        catch(err){
          console.log(err.message)
        }
        setTimeout(()=>{
        setErr(" ")
      },4000)
  }
  /*----------------------------------
  *End REGISTER jobS
  ----------------------------------*/


  /*----------------------------------
  *Start EDIT jobS
  ----------------------------------*/
  const editjob = async (obj)=>{
        const config = {
          header:{
            "Content-Type": "application/json"
          }
        }
        try{
          const {data} = await axios.put("http://localhost:8080/api/public/editjobs/",obj,config)
          if(data.success === true){
            setErr(<Error message={data.mess} bgcolor="success" />)
            JobsData()
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


  /*----------------------------------
  *Begin DELETE job
  ----------------------------------*/
  function deletejobs(id){    
    if(window.confirm('Are you sure you want to delete!')){
      const deletejob = async ()=>{
        try{
         await axios.delete("http://localhost:8080/api/public/deletejobs/"+id)
         JobsData()
        }
        catch(err){
          console.log(err.message)
        }
      }
      deletejob()
    }
    else{

    }
}
/*----------------------------------
*End DELETE USER
----------------------------------*/

  return {addjob,editjob,deletejobs,err}
}