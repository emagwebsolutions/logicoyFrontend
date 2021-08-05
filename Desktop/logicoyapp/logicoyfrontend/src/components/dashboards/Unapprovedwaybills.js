import React,{useState} from 'react'
import {Table} from 'react-bootstrap'
import {FaRegEdit} from 'react-icons/fa'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import ApproveJobForm from './ApproveJobForm'

export default function Unapprovedwaybills({data}){
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


  const waybills = Object.values(jobs).map((v,i) => {
      return (
        <tr key={v._id}>
        <td>{i + 1}</td>
        <td>{v.date}</td>
        <td>{v.fullname}</td>
        <td>{v.driver}</td>
        <td>


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
})



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
            {waybills}
            </tbody>
        </Table>
        </div>
    <ApproveJobForm  output={jobdetails} onHide={setmodalhide} show ={modalshow} />
        </>
    )
}