import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'
import Error from '../../Error'
import {useDispatch} from 'react-redux'
import  {fetchallfuel} from '../../redux/actions/actions'

export default function useFuel(){
  const [err,setErr] = useState("")
  const dispatch = useDispatch()

        /*-------------------------------
        *START GET ALL Fuel DATA
        -------------------------------*/
        const Fueldata = useRef("")
        Fueldata.current = async ()=>{
          try{
            const config = {header:{"Content-Type": "application/json"}}
            const {data} = await axios.get(`${process.env.REACT_APP_URL}/api/public/getfuelrates/`,config)
            if(data.success === true){
              dispatch(fetchallfuel(data.fuel))
            }
          }
          catch(err){
            console.log(err.message)
          }
          
        }
        useEffect(()=>{
          Fueldata.current()
        },[err])
      /*-------------------------------
      *END GET ALL DROVERS DATA
      -------------------------------*/




  /*----------------------------------
  *Start REGISTER Fuel
  ----------------------------------*/
  const addfuelrate = async (rate)=>{
        const config = {
          header:{
            "Content-Type": "application/json"
          }
        }
        try{
          const {data} = await axios.post(`${process.env.REACT_APP_URL}/api/public/addfuelrate/`,rate,config)
          if(data.success){
            setErr(<Error message={data.mess} bgcolor="success" />)   
            Fueldata.current()
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
  *End REGISTER Fuel
  ----------------------------------*/


  /*----------------------------------
  *Start EDIT Fuel
  ----------------------------------*/
 
  const editfuelrate = async (obj)=>{
        const config = {
          header:{
            "Content-Type": "application/json"
          }
        }
        try{
          const {data} = await axios.put(`${process.env.REACT_APP_URL}/api/public/editfuelrate/`,obj,config)
          if(data.success === true){
            setErr(<Error message={data.mess} bgcolor="success" />)
            Fueldata.current()
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
  *Begin DELETE DRIVER
  ----------------------------------*/

  function deletefuelrate(id){    
    if(window.confirm('Are you sure you want to delete!')){

      const deleteFuelrate = async ()=>{
        try{
         await axios.delete(`${process.env.REACT_APP_URL}/api/public/deletefuelrate/`+id)
         Fueldata.current()
        }
        catch(err){
          console.log(err.message)
        }
      }
      deleteFuelrate()

    }
    else{

    }
  
}

/*----------------------------------
*End DELETE USER
----------------------------------*/
  return {addfuelrate,editfuelrate,deletefuelrate,err}
}