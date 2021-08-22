import React,{useState,useRef,useEffect} from 'react'
import axios from 'axios'
import Error from '../../Error'
import {fetchalljobs} from '../../redux/actions/actions'
import {useDispatch} from 'react-redux'


export default function useApprovedbillslogic(){
  const [err,setErr] = useState("")
  const dispatch = useDispatch()

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
          const {data} = await axios.put(`${process.env.REACT_APP_URL}/api/public/approvejobs/`,obj,config)
          if(data.success === true){
            setErr(<Error message={data.mess} bgcolor="success" />)
            JobsData.current()
          }
          if(data.success ===false){
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