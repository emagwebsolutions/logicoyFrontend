import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'
import moment from 'moment'
import {useDispatch} from 'react-redux'
import {fetchalljobs,fetchalldrivers,fetchalltransporters,fetchalltrucks} from '../../redux/actions/actions'

export default function useHistoryboxlogic(){
const dispatch = useDispatch()
const [hist,setHist] = useState("")







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

      /*-------------------------------
      *END GET ALL DROVERS DATA
      -------------------------------*/


      

        /*-------------------------------
        *START GET ALL TRANSPORTERS DATA
        -------------------------------*/
        const TranspData = useRef("")

        TranspData.current = async ()=>{
          try{
            const config = {header:{"Content-Type": "application/json"}}
            const {data} = await axios.get(`${process.env.REACT_APP_URL}/api/public/gettransporters/`,config)
            if(data.success === true){
              dispatch(fetchalltransporters(data.transporters))
            }
          }
          catch(err){
            console.log(err.message)
          }
          
        }
     
      /*-------------------------------
      *END GET ALL TRANSPORTERS DATA
      -------------------------------*/


      
        /*-------------------------------
        *START GET ALL TruckS DATA
        -------------------------------*/
        const TrucksData = useRef("")

        TrucksData.current = async ()=>{
          try{
            const config = {header:{"Content-Type": "application/json"}}
            const {data} = await axios.get(`${process.env.REACT_APP_URL}/api/public/gettrucks/`,config)
            if(data.success === true){
              dispatch(fetchalltrucks(data.trucks))
            }
          }
          catch(err){
            console.log(err.message)
          }
          
        }
  
      /*-------------------------------
      *END GET ALL TRUCKS DATA
      -------------------------------*/

    
        /*-------------------------------
        *START GET ALL History DATA
        -------------------------------*/
            const histories = useRef("")
            histories.current = async () => {
            const config = {
                header: {
                    "Content-Type" : "application/json"
                }
            }
            try{
                const {data} = await axios.get(`${process.env.REACT_APP_URL}/api/public/gethistory/`,config)
                setHist(data.data)
            }
            catch(err){
                console.log(err)
            }
        }
        /*-------------------------------
        *END GET ALL History DATA
        -------------------------------*/

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
          DriversData.current()
          TranspData.current()
          TrucksData.current()
          JobsData.current()
          histories.current()
        },[])
      /*-------------------------------
      *END GET ALL JOBS DATA
      -------------------------------*/



const output = Object.values(hist).map((v,i) => {
    const date = moment(v.createdAt).fromNow();
    return(
            <div key={v._id} className="activityinner">
                <p>{v.user} {v.activity}</p>
                <small>{date}</small>
            </div>
 
    )
})


return {output}


}