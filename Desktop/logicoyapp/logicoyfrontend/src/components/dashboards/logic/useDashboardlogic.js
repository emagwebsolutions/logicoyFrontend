import {useEffect,useState} from 'react'
import axios from 'axios'
const _ = require('lodash')

export default function useDashboardlogic({history}){

    const [jobs,setJobs] = useState({})

    const authorize = async ()=>{
            try{
                const config = {
                    headers:{
                        "Content-Type" : "application/json",
                        Authorization: `Bearer ${localStorage.getItem('userToken')}`
                    }
                }
                const {data} = await axios.get("http://localhost:8080/api/private/authorize/",config)
                if(!data.success){
                    localStorage.setItem("userToken", "")
                    history.push("/")
                    localStorage.clear()
                }
          
         
            }
            catch(err){
                console.log(err.message)
            }
    }
    authorize()


    useEffect(()=>{   
        const getJobs = async ()=>{

            const config = {
                header: {"Content-Type": "application/json"}
            }
            try{
                const {data} = await axios.get("http://localhost:8080/api/public/getjobs", config)
              
                setJobs(data.jobs)

            }
            catch(err){
                console.log(err.message)
            }
        }
        getJobs()

    },[])

    const obj = Object.values(jobs)
    const trips = Object.keys(jobs).length

    const truck = _.groupBy(obj, "trucknumber")
    const trucks = Object.keys(truck).length

    const transp = _.groupBy(obj, "transporter")
    const transps = Object.keys(transp).length

    return {jobs,trips,trucks,transps}
}