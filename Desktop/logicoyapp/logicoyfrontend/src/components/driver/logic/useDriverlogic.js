import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Error from '../../Error'
import curuser from '../../users/curuser'
import useData from '../../redux/useData'
export default function useDriverlogic(){
  const [err,setErr] = useState("")
  const {DriversData} = useData()


  /*----------------------------------
  *Start DATA INITIALIZATION
  ----------------------------------*/
  useEffect(()=>{
    DriversData()
  },[])
/*----------------------------------
*End DATA INITIALIZATION
----------------------------------*/




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
          const {data} = await axios.post("http://localhost:8080/api/public/adddrivers/",{...driver,...creator},config)
          if(data.success){
            setErr(<Error message={data.mess} bgcolor="success" />)   
            DriversData()
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
          const {data} = await axios.put("http://localhost:8080/api/public/editdrivers/",obj,config)
          if(data.success === true){
            setErr(<Error message={data.mess} bgcolor="success" />)
            DriversData()
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
         await axios.delete("http://localhost:8080/api/public/deletedrivers/"+id)
         DriversData()
         
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