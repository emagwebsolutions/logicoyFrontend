import React,{useState} from 'react'
import DateFormats from '../DateFormats'
import useFuel from './logic/useFuel'
import {FaTrashAlt, FaRegEdit} from 'react-icons/fa'
import FuelEditForm from './FuelEditForm'
import {Link} from 'react-router-dom'

export default function Fueltables({data}){
    const {formatDate} = DateFormats()
    const {deletefuelrate} = useFuel()
    //States
    const [modalshow, setModalShow] = React.useState(false);
    const [fueldetails,setfueldetails] = useState()

      /*-----------------------------
      START JOBS FORM MODAL
    -----------------------------*/
  
    //Modal show
    function setmodalShow(id){
        if(data){ 
        const dd = Object.values(data).filter(v => {
            if(v._id === id){
                return v
            }
            else{
                return ''
            }
        })
         setfueldetails({...dd[0]})
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
      function deletefuel(id){
          deletefuelrate(id)
      }

    let i=0
    return (
        <>
        { 
        Object.values(data).map(v =>{ 
            i++
            return (  
                <tr>
                <td>{i}</td>
                <td>{formatDate(v.createdAt)}</td>
                <td>{v.fuelstation}</td>
                <td>{v.rate}</td>
                <td>
                {/* DELETE */}
                <Link to="/#"  
                onClick={(e)=>{
                e.preventDefault()
                deletefuel(v._id)
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
        })
        }

        <FuelEditForm
        output={fueldetails}
        onHide={setmodalhide} 
        show ={modalshow} />
        </>
    )
}