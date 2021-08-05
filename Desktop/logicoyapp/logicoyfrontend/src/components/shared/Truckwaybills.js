import React from "react"
import { Table } from 'react-bootstrap'
import {useSelector} from 'react-redux'



export default function Truckwaybills(props){


  //Data source
  const job = useSelector((state)=> state.jobs.alljobs)
  const jobs = {...job}




const waybills = Object.values(jobs).map((v,i) => {
    if(props.TRUCKNUM === v.trucknumber){
      return (
        <tr key={v._id}>
        <td>{i + 1}</td>
        <td>{v.date}</td>
        <td>{v.fullname}</td>
        <td>{v.driver}</td>
        <td>{v.destination}</td>
        <td>{v.fuel}</td>



        
      
        </tr>
      )
    }
    else{
      return ''
    }
})


    return (
        <>
        <div className="scrollTrans">
          <Table responsive="lg" style={{fontSize:"12px"}}>
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Client's Name</th>
                <th>Driver</th>
                <th>Destination</th>
                <th>Fuel</th>
              </tr>
            </thead>
            <tbody>
            {waybills}
            </tbody>
          </Table>
        </div>



        </>
    )
}