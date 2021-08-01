import React from "react"
import { Table } from 'react-bootstrap'
import moment from 'moment'

export default function Payments({data}){
   
   const obj = {...data.data}


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
                <th>Payment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

                {
                    Object.values(obj).map((v,i)=>{
                    
                        return ( 
                            <tr key={i}>
                            <td>{i+1}</td>
                            <td>{moment(v.date).format("MMM Do YY")}</td>
                            <td>{v.fullname}</td>
                            <td>{v.driver}</td>
                            <td>{v.destination}</td>
                            <td>{v.payment}</td>
                            <td>View</td>
                            </tr>
                        )
                    })

                }

      
            </tbody>
          </Table>
        </div>

        </>
    )
}