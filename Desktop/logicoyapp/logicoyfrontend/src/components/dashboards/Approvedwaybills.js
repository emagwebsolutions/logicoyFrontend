import React from 'react'
import {Table} from 'react-bootstrap'
import moment from 'moment'
import {FaRegEdit} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default function Approvedwaybills({data}){
    return (
        <>
        <div className="waybillTb">
        <Table responsive="lg" >
            <thead>
            <tr>
                <th>#</th>
                <th>Date</th>
                <th>Client's Name</th>
                <th>Driver</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {
                Object.values(data).map((v,i) =>{
                    if(v.payment > 0){
                    return (
                        <tr key={i}>
                        <td>{i+1}</td>
                        <td>
                        {moment(v.date).format("MMM Do YY")}
                        </td>
                        <td>{v.fullname}</td>
                        <td>{v.driver}</td>
                        <td>
                        <Link to="/#" onClick={(e)=>{e.preventDefault()}}>
                        <FaRegEdit className="text-primary smbtn" />
                        </Link>
                        </td>
                        </tr>
                    )
                    }
                    return true
                })

            }
            </tbody>
        </Table>
        </div>
        </>
    )
}