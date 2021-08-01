import React from "react"
import { Table } from 'react-bootstrap'
import moment from 'moment'
const _ = require("lodash")

export default function Drivers({data}){
   
   const obj = {...data.data}

   const vv = _.groupBy(obj, 'driver')


    return (
        <>
        <div className="scrollTrans">
          <Table responsive="lg" style={{fontSize:"12px"}}>
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Driver's Name</th>
                <th>Contact</th>
                <th>License</th>
                <th>Truck Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

                {
                    Object.entries(vv).map((v,i)=>{
               
                      const dd = v[1][0]
                      
      
                        return ( 
                            <tr key={i}>
                            <td>{i+1}</td>
                            <td>{moment(dd.date).format("MMM Do YY")}</td>
                            <td>{dd.driver}</td>
                            <td>{dd.dcontact}</td>
                            <td>{dd.license}</td>
                            <td>{dd.trucknumber}</td>
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