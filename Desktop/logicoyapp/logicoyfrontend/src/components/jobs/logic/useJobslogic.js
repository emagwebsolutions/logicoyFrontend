import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'
import Error from '../../Error'
import curuser from '../../users/curuser'
import {useDispatch} from 'react-redux'
import {fetchalljobs} from '../../redux/actions/actions'


export default function useJobslogic(){
  const [err,setErr] = useState("")
  const dispatch = useDispatch()
  const {creator} = curuser()

    
        /*-------------------------------
        *START GET ALL JOBS DATA
        -------------------------------*/
        const JobsData = useRef("")
        JobsData.current = async ()=>{
          try{
            const config = {header:{"Content-Type": "application/json"}}
            const {data} = await axios.get(`${process.env.REACT_APP_URL}/api/public/getjobs/`,config)
            if(data.success === true){
              dispatch(fetchalljobs(data.jobs))
            }
          }
          catch(err){
            console.log(err.message)
          }
          
        }
        useEffect(()=>{
          JobsData.current()
        },[err])
      /*-------------------------------
      *END GET ALL JOBS DATA
      -------------------------------*/


  const addjob = async (job)=>{
    
        const config = {
          header:{
            "Content-Type": "application/json"
          }
        }
        try{
        const obj = {...job,...creator}
   
      const {data} = await axios.post(`${process.env.REACT_APP_URL}/api/public/addjobs/`,obj,config)
          
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
          const {data} = await axios.put(`${process.env.REACT_APP_URL}/api/public/editjobs/`,obj,config)
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


  /*----------------------------------
  *Begin DELETE job
  ----------------------------------*/
  function deletejobs(id){    
    if(window.confirm('Are you sure you want to delete!')){
      const deletejob = async ()=>{
        try{
         await axios.delete(`${process.env.REACT_APP_URL}/api/public/deletejobs/`+id)
         setErr("deleted")
         
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