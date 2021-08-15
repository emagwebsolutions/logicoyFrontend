import {useEffect,useState,useRef} from 'react'
import axios from 'axios'

export default function useDashboardlogic(){

    const [tottrips,settottrips] = useState(0)
    const [tottrucks,settottrucks] = useState(0)
    const [tottransp,settottransp] = useState(0)
    const [totdrivers,settotdrivers] = useState(0)
    


    const [chartdata,setchartdata] = useState()
    const Totaltrips = useRef("")
    const Totaltransp = useRef("")
    const Totaldrivas = useRef("")
    const Totaltrucks = useRef("")
    const Chartdata = useRef("")

    Totaltrips.current = async ()=>{
        const config = {
            header: {
                "Content-Type" : "application/json"
            }
        }
        try{
            const {data} = await axios.get(`${process.env.REACT_APP_URL}/api/public/gettottrips`,config)
            settottrips(data.output)
        
        }
        catch(err){
            console.log(err.message)
        }
    }




    Totaldrivas.current = async ()=>{
        const config = {
            header: {
                "Content-Type" : "application/json"
            }
        }
        try{
            const {data} = await axios.get(`${process.env.REACT_APP_URL}/api/public/gettotdrivers`,config)
            settotdrivers(data.output)
        }
        catch(err){
            console.log(err.message)
        }
    }
    

    Totaltransp.current = async ()=>{
        const config = {
            header: {
                "Content-Type" : "application/json"
            }
        }
        try{
            const {data} = await axios.get(`${process.env.REACT_APP_URL}/api/public/gettottransp`,config)
            settottransp(data.output)
        }
        catch(err){
            console.log(err.message)
        }
    }
 


    Totaltrucks.current = async ()=>{
        const config = {
            header: {
                "Content-Type" : "application/json"
            }
        }
        try{
            const {data} = await axios.get(`${process.env.REACT_APP_URL}/api/public/gettottrucks`,config)
            settottrucks(data.output)
        }
        catch(err){
            console.log(err.message)
        }
    } 


      Chartdata.current = async ()=>{
        const config = {
            header: {
                "Content-Type" : "application/json"
            }
        }
        try{
            const {data} = await axios.get(`${process.env.REACT_APP_URL}/api/public/getlinechartdata`,config)
            setchartdata(data.output)
        }
        catch(err){
            console.log(err.message)
        }
    } 


    useEffect(()=>{
        Totaltrips.current()
        Totaltransp.current()
        Totaltrucks.current()
        Chartdata.current()
        Totaldrivas.current()
    },[])

    
    return {tottrips,tottrucks,tottransp,chartdata,totdrivers}
}