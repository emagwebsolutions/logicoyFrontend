import React from "react"
import { Table } from 'react-bootstrap'
import {useSelector} from 'react-redux'

export default function Trucksinfo(props){



  //Data source
  const trucks = useSelector((state)=> state.trucks.alltrucks)
  const trk = {...trucks}




const waybills = Object.values(trk).map((v,i) => {
    if(props.PHONE === v.tcontact){
      return (
        <tr key={v._id}>
        <td>{i + 1}</td>
        <td>{v.date}</td>
        <td>{v.truckname}</td>
        <td>{v.trucknumber}</td>
        <td>{v.transporter}</td>
        <td>{v.tcontact}</td>
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
                <th>Truck Name</th>
                <th>Truck Number</th>
                <th>Transporter</th>
                <th>Contact</th>
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