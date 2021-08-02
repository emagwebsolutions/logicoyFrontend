import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Error from '../../Error'
import curuser from '../../users/curuser'
import useData from '../../redux/useData'
export default function useTranslogic(){
  const [err,setErr] = useState("")
  const {TranspData} = useData()


  /*----------------------------------
  *Start DATA INITIALIZATION
  ----------------------------------*/
  useEffect(()=>{
    TranspData()
  },[])
/*----------------------------------
*End DATA INITIALIZATION
----------------------------------*/


  /*----------------------------------
  *Start REGISTER TRANSPORTERS
  ----------------------------------*/
  const addTrans = async (driver)=>{
    const {creator} = curuser()
        const config = {
          header:{
            "Content-Type": "application/json"
          }
        }
        try{
          const {data} = await axios.post("http://localhost:8080/api/public/addtransporters/",{...driver,...creator},config)
          if(data.success){
            setErr(<Error message={data.mess} bgcolor="success" />)  
            TranspData() 
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
  *End REGISTER TRANSPORTERS
  ----------------------------------*/


  /*----------------------------------
  *Start EDIT TRANSPORTERS
  ----------------------------------*/
 
  const editTrans = async (obj)=>{
 
        const config = {
          header:{
            "Content-Type": "application/json"
          }
        }
   
        try{
          const {data} = await axios.put("http://localhost:8080/api/public/edittransporters/",obj,config)
          if(data.success === true){
            setErr(<Error message={data.mess} bgcolor="success" />)
            TranspData() 
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
  *Begin DELETE  TRANSPORTERS
  ----------------------------------*/
  function deleteTrans(id){    
    if(window.confirm('Are you sure you want to delete!')){

      const deletetransp = async ()=>{
        try{
         await axios.delete("http://localhost:8080/api/public/deletetransporters/"+id)
         TranspData() 
        }
        catch(err){
          console.log(err.message)
        }
      }
      deletetransp()

    }
    else{

    }
}
/*----------------------------------
*End DELETE TRANSPORTERS
----------------------------------*/

  return {addTrans,editTrans,deleteTrans,err}
}