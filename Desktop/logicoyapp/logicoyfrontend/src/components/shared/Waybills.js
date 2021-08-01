import React from "react"
import { Table } from 'react-bootstrap'
export default function Waybills(props){
   
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

                            <tr>
                            <td>{}</td>
                            <td>{}</td>
                            <td>{}</td>
                            <td>{}</td>
                            <td>{}</td>
                            <td>{}</td>
                            <td>View</td>
                            </tr>
  
      
            </tbody>
          </Table>
        </div>

        </>
    )
}