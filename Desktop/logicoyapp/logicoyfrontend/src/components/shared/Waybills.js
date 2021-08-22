import React, {useState} from "react"
import { Table } from 'react-bootstrap'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {FaTrashAlt, FaRegEdit} from 'react-icons/fa'
import useJobslogic from '../jobs/logic/useJobslogic'
import JobsEditForm from '../jobs/JobsEditForm'
import DateFormats from '../DateFormats'

export default function Waybills(props){
  const {formatDate} = DateFormats()

  //Logic function
  const {deletejobs} = useJobslogic() 

  //Data source
  const job = useSelector((state)=> state.jobs.alljobs)
  const jobs = {...job}

  //States
  const [modalshow, setModalShow] = React.useState(false);
  const [jobdetails,setjobdetails] = useState()

  /*-----------------------------
    START JOBS FORM MODAL
  -----------------------------*/

  //Modal show
  function setmodalShow(id){
    if(jobs){ 
    const dd = Object.values(jobs).filter(v => {
        if(v._id === id){
            return v
        }
        else{
            return ''
        }
    })
     setjobdetails({...dd[0]})
    }

    setModalShow(true)
  }

  //Modal Hide
  function setmodalhide(){
      setModalShow(false)
  }
  /*-----------------------------
  END JOBS FORM MODAL
  -----------------------------*/

  //Delete record
  function deletejob(id){
    deletejobs(id)
  }


let i=0
const waybills = Object.values(jobs).map((v) => {
  i++
    if(props.PHONE === v.tcontact){
      return (
        <tr key={v._id}>
        <td>{i}</td>
        <td>{formatDate(v.date)}</td>
        <td>{v.fullname}</td>
        <td>{v.driver}</td>
        <td>{v.destination}</td>
        <td>{v.fuel}</td>
        <td>

        {/* DELETE */}
        <Link to="/#"  
        onClick={(e)=>{
          e.preventDefault()
          deletejob(v._id)
        }} 
        className="cursor">
        <FaTrashAlt className="text-danger mr-3 smbtn" />
        </Link>

        {/* EDIT */}
        <Link to="/#" 
        onClick={(e)=>{
          e.preventDefault()
          setmodalShow(v._id)
        }}>
        <FaRegEdit className="text-primary smbtn" />
        </Link>

        </td>
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
                <th>Cargo Owner</th>
                <th>Driver</th>
                <th>Destination</th>
                <th>Fuel</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {waybills}
            </tbody>
          </Table>
        </div>


        <JobsEditForm 
        output={jobdetails}
        onHide={setmodalhide} 
        show ={modalshow} />

        </>
    )
}