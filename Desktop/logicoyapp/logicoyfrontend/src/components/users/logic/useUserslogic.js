import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'
import Error from '../../Error'
import {useDispatch} from 'react-redux'
import {fetchallusers} from '../../redux/actions/actions'
export default function useUserslogic(){
  const [err,setErr] = useState("")
  const dispatch = useDispatch()
  


          /*-------------------------------
          *START GET ALL USERS DATA
          -------------------------------*/
          const UsersDatas = useRef("")
          UsersDatas.current = async ()=>{
            try{
              const config = {header:{"Content-Type": "application/json"}}
              const {data} = await axios.get(`${process.env.REACT_APP_URL}/api/public/users/`,config)
              if(data.success === true){
                dispatch(fetchallusers(data.users))
              }
            }
            catch(err){
              console.log(err.message)
            }
            
          }
       
          useEffect(()=>{
            UsersDatas.current()
          },[err])
      
        /*-------------------------------
        *END GET ALL USERS DATA
        -------------------------------*/


  /*----------------------------------
  *Start REGISTER USERS
  ----------------------------------*/
  const registerUser = async (user)=>{
        const config = {
          header:{
            "Content-Type": "application/json"
          }
        }
        try{
          const {data} = await axios.post(`${process.env.REACT_APP_URL}/api/public/register/`,user,config)
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
  *End REGISTER USERS
  ----------------------------------*/


  /*----------------------------------
  *Start EDIT USERS
  ----------------------------------*/
  const editUser = async (obj,setErr)=>{
        const config = {
          header:{
            "Content-Type": "application/json"
          }
        }
        try{
          const {data} = await axios.put(`${process.env.REACT_APP_URL}/api/public/edituser`,obj,config)
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
  *Begin DELETE USER
  ----------------------------------*/
    function deleteusers(id){    
        if(window.confirm('Are you sure you want to delete!')){
          const deleteUser = async ()=>{
            try{
             await axios.delete(`${process.env.REACT_APP_URL}/api/public/deleteuser/`+id)
             
            }
            catch(err){
              console.log(err.message)
            }
          }
          deleteUser()
        }
        else{
    
        }
    }
  /*----------------------------------
  *End DELETE USER
  ----------------------------------*/
  
  return {err,registerUser,deleteusers,editUser}
}
