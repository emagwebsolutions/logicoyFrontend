import React,{useState,useEffect} from 'react'
import axios from 'axios'


export default function useHistoryboxlogic(){

const [hist,setHist] = useState("")

useEffect(()=>{ 
    const histories = async () => {
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
    histories()
},[])


const output = Object.values(hist).map((v,i) => {
    return(
            <div key={v._id} className="activityinner">
                <p>{v.user} {v.activity}</p>
                <small>{v.date}</small>
            </div>
 
    )
})


return {output}


}