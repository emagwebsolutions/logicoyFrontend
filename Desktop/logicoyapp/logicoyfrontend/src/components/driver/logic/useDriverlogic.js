import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'
import Error from '../../Error'
import curuser from '../../users/curuser'
import {useDispatch} from 'react-redux'
import  {fetchalldrivers} from '../../redux/actions/actions'
export default function useDriverlogic(){
  const [err,setErr] = useState("")
  const dispatch = useDispatch()



        /*-------------------------------
        *START GET ALL DRIVERS DATA
        -------------------------------*/
        const DriversData = useRef("")
        DriversData.current = async ()=>{
          try{
            const config = {header:{"Content-Type": "application/json"}}
            const {data} = await axios.get(`${process.env.REACT_APP_URL}/api/public/getdrivers/`,config)
            if(data.success === true){
              dispatch(fetchalldrivers(data.drivers))
            }
          }
          catch(err){
            console.log(err.message)
          }
          
        }
        useEffect(()=>{
          DriversData.current()
        },[err])
      /*-------------------------------
      *END GET ALL DROVERS DATA
      -------------------------------*/




  /*----------------------------------
  *Start REGISTER DRIVERS
  ----------------------------------*/
  const adddriver = async (driver)=>{
    const {creator} = curuser()
        const config = {
          header:{
            "Content-Type": "application/json"
          }
        }
        try{
          const {data} = await axios.post(`${process.env.REACT_APP_URL}/api/public/adddrivers/`,{...driver,...creator},config)
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
  *End REGISTER DRIVERS
  ----------------------------------*/


  /*----------------------------------
  *Start EDIT DRIVERS
  ----------------------------------*/
 
  const editdriver = async (obj)=>{
 
        const config = {
          header:{
            "Content-Type": "application/json"
          }
        }
   
        try{
          const {data} = await axios.put(`${process.env.REACT_APP_URL}/api/public/editdrivers/`,obj,config)
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
  *Begin DELETE DRIVER
  ----------------------------------*/

  function deletedrivers(id){    
    if(window.confirm('Are you sure you want to delete!')){

      const deleteDriver = async ()=>{
        try{
         await axios.delete(`${process.env.REACT_APP_URL}/api/public/deletedrivers/`+id)
         
         
        }
        catch(err){
          console.log(err.message)
        }
      }
      deleteDriver()

    }
    else{

    }
  
}

/*----------------------------------
*End DELETE USER
----------------------------------*/
  return {adddriver,editdriver,deletedrivers,err}
}