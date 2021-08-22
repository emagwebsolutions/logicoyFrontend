import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'
import Error from '../../Error'
import {useDispatch} from 'react-redux'
import  {fetchallcargo} from '../../redux/actions/actions'

export default function useCargo(){
  const [err,setErr] = useState("")
  const dispatch = useDispatch()

        /*-------------------------------
        *START GET ALL CARGO DATA
        -------------------------------*/
        const CargoData = useRef("")
        CargoData.current = async ()=>{
          try{
            const config = {header:{"Content-Type": "application/json"}}
            const {data} = await axios.get(`${process.env.REACT_APP_URL}/api/public/getcargorates/`,config)
            if(data.success === true){
              dispatch(fetchallcargo(data.cargo))
            }
          }
          catch(err){
            console.log(err.message)
          }
          
        }
        useEffect(()=>{
          CargoData.current()
        },[err])
      /*-------------------------------
      *END GET ALL DROVERS DATA
      -------------------------------*/




  /*----------------------------------
  *Start REGISTER Fuel
  ----------------------------------*/
  const addcargorate = async (rate)=>{
        const config = {
          header:{
            "Content-Type": "application/json"
          }
        }
        try{
          const {data} = await axios.post(`${process.env.REACT_APP_URL}/api/public/addcargorate/`,rate,config)
          if(data.success){
            setErr(<Error message={data.mess} bgcolor="success" />)   
            CargoData.current()
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
 
  const editcargorate = async (obj)=>{
        const config = {
          header:{
            "Content-Type": "application/json"
          }
        }
        try{
          const {data} = await axios.put(`${process.env.REACT_APP_URL}/api/public/editcargorate/`,obj,config)
          if(data.success === true){
            setErr(<Error message={data.mess} bgcolor="success" />)
            CargoData.current()
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

  function deletecargorate(id){    
    if(window.confirm('Are you sure you want to delete!')){

      const deleteCargorate = async ()=>{
        try{
         await axios.delete(`${process.env.REACT_APP_URL}/api/public/deletecargorate/`+id)
         CargoData.current()
        }
        catch(err){
          console.log(err.message)
        }
      }
      deleteCargorate()

    }
    else{

    }
  
}

/*----------------------------------
*End DELETE USER
----------------------------------*/
  return {addcargorate,editcargorate,deletecargorate,err}
}