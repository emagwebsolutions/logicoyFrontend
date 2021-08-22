import React,{useState,useRef,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {fetchallwaybills} from '../../redux/actions/actions'
import Error from '../../Error'
import axios from 'axios'

export default function useWaybilllogic(){
    const [err,setErr] = useState("")
    const dispatch = useDispatch()

        /*-------------------------------
        *START GET ALL WAYBILLS DATA
        -------------------------------*/
        const WaybillsData = useRef("")
        WaybillsData.current = async ()=>{
          try{
            const config = {header:{"Content-Type": "application/json"}}
            const {data} = await axios.get(`${process.env.REACT_APP_URL}/api/public/getwaybills/`,config)
            if(data.success === true){
              dispatch(fetchallwaybills(data.jobs))
            }
          }
          catch(err){
            console.log(err.message)
          }
          
        }
        useEffect(()=>{
          WaybillsData.current()
        },[])
      /*-------------------------------
      *END GET ALL JOBS DATA
      -------------------------------*/

    /*----------------------------------
    *Start EDIT Waybills
    ----------------------------------*/
    const editwaybill = async (obj)=>{
        const config = {
        header:{
            "Content-Type": "application/json"
        }
        }
        try{
        const {data} = await axios.put(`${process.env.REACT_APP_URL}/api/public/editwaybills/`,obj,config)
        if(data.success === true){
            setErr(<Error message={data.mess} bgcolor="success" />)
            WaybillsData.current()
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
    *End EDIT Waybills
    ----------------------------------*/

    /*----------------------------------
    *Begin DELETE Waybill
    ----------------------------------*/
    function deletewaybills(id){    
        if(window.confirm('Are you sure you want to delete!')){
        const deleteWaybill = async ()=>{
            try{
            await axios.delete(`${process.env.REACT_APP_URL}/api/public/deletewaybills/`+id)
            WaybillsData.current()
            }
            catch(err){
            console.log(err.message)
            }
        }
        deleteWaybill()
        }
        else{

        }
    }
    /*----------------------------------
    *End DELETE Waybill
    ----------------------------------*/

    return {err,editwaybill,deletewaybills}
} 