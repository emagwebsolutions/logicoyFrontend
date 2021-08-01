import React from 'react'
import moment from 'moment'
import {FaRegEdit} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default function useUnapprovedbillslogic({data}){

    const output = Object.values(data).map((v,i) =>{
        if(!v.payment){
        return (
            <tr key={v._id}>
            <td>{i+1}</td>
            <td> {moment(v.date).format("MMM Do YY")}</td>
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
  
    return {output}
}