import React,{useState} from 'react'
import Navbars from '../Navbars'
import Footer from '../Footer'
import {Container,Row,Col} from 'react-bootstrap'
import List from '../shared/List'
import Details from '../shared/Details'
import Transactions from '../shared/Transactions'
import Tabs from '../shared/Tabs'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {FaTrashAlt, FaRegEdit} from 'react-icons/fa'
import JobsForm from './JobsForm'
import JobsEditForm from './JobsEditForm'
import useJobslogic from './logic/useJobslogic'
import useSearchHook from '../useSearchHook'

export default function Jobs(){
    const [modalshow, setModalShow] = React.useState(false);
    const [emodalshow, esetModalShow] = React.useState(false);
    const [singlejob,setsinglejob] = useState()
    const datasource = useSelector((state)=> state.jobs.alljobs)
    const datasource2 = useSelector((state)=> state.transporters.alltrans)
    const transports = {...datasource2}
    const {output,searchdatalist} = useSearchHook(datasource2)

    const [jobdetails, setjobdetails] = useState()
    const [mobilephone, setmobilephone] = useState()
   
    const {deletejobs} = useJobslogic()
    /*-----------------------------
    START JOBS FORM MODAL
    -----------------------------*/
    function setmodalShow(){
        setModalShow(true)
    }
    function setmodalhide(){
        setModalShow(false)
    }
    /*-----------------------------
    END JOBS FORM MODAL
    -----------------------------*/

    /*-----------------------------
    START EDIT JOBS FORM MODAL
    -----------------------------*/
  
    function esetmodalShow(id){
        const obj = {...datasource}
        const dd = Object.values(obj).filter(v => {
            if(v._id === id){
                return v
            }
            return true
        })
         setsinglejob({...dd[0]})
        esetModalShow(true)
    }
    
    function esetmodalhide(){
        esetModalShow(false)
    }

    
    /*-----------------------------
    END EDIT JOBS FORM MODAL
    -----------------------------*/

    const cc = useSelector((state)=> state.drivers.alldrivers)
    const dta = {...cc}

    function jobsdetailss(phone){
        setmobilephone(phone)



        const rs = Object.values(dta).map(v => {

            if(v.tcontact === phone ){
            return (
                <React.Fragment  key={v._id}>
                <tr>
                <td style={{width:"30%"}}>Transporter:</td>
                <td>{v.transporter}</td>
                </tr>

                <tr>
                <td>Contact:</td>
                <td>{v.tcontact}</td>
                </tr>

                <tr>
                <td>Total Drivers:</td>
                <td>{}</td>
                </tr>

                <tr>
                <td>Created by:</td>
                <td>{v.createdby}</td>
                </tr>
            
                </React.Fragment>
            
                )
            }
            
            return true
        })
  
        
        setjobdetails(rs)
    }



    //Delete record
    function deleterec(id){
        deletejobs(id)
    }



    let outputresult 
    let obs
    if(output){
        obs = output
    }
    else{
        obs = Object.values(transports)
    }
 
    outputresult = Object.values(obs).map((v,i) => {
        return (
            <Row key={v._id}   className="border p-2">
            <Col md={9} xs={12}>
            <Link to="/#" style={{color: "#000000",fontSize: "11px"}} 
            onClick={(e)=>{
                e.preventDefault()
                jobsdetailss(v.tcontact)
            }}>
            {i+1}. {v.transporter}
            </Link>
            </Col>

            <Col md={3} xs={12}>
            <Link to="/#"  onClick={(e)=>{
                e.preventDefault()
                deleterec(v._id)
            }} className="cursor">
            <FaTrashAlt className="text-danger mr-3 smbtn" />
            </Link>

            <Link to="/#" onClick={(e)=>{
                e.preventDefault()
                esetmodalShow(v._id)
            }}>
            <FaRegEdit className="text-primary smbtn" />
            </Link>
            </Col>

        </Row>

        )
    })


    return (
        <>
        <Navbars />
        <br />
        <Container className="bg-white ">
            <Row>
                <Col xs={12} md={4}>
                    <div className="p-4">
                    <List DATA={outputresult} searchbx={searchdatalist} />
                    </div>
                </Col>
                <Col xs={12} md={8}>
                    <div className="pt-4 pb-4">
                    <Tabs Heading="Add Jobs"   setModalShow={setmodalShow} />
                    <Details DLIST = {jobdetails} />
                    <Transactions PHONENUM={mobilephone} />
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer />
        
        <JobsForm   onHide={setmodalhide} show ={modalshow} />

        <JobsEditForm  output={singlejob}  onHide={esetmodalhide} show ={emodalshow} />

        </>
    )
}