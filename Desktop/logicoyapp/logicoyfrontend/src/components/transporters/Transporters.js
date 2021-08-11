import React,{useState} from 'react'
import Navbars from '../Navbars'
import Footer from '../Footer'
import {Container,Row,Col} from 'react-bootstrap'
import List from '../shared/List'
import Details from '../shared/Details'
import Transtransaction from '../shared/Transtransaction'
import Tabs from '../shared/Tabs'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {FaTrashAlt, FaRegEdit} from 'react-icons/fa'
import TransForm from './TransForm'
import TransEditForm from './TransEditForm'
import useTranslogic from './logic/useTranslogic'
import useSearchHook from '../useSearchHook'

export default function Transporters(){
    const [modalshow, setModalShow] = React.useState(false);
    const [emodalshow, esetModalShow] = React.useState(false);
    const [singletransporter,setsingletransporter] = useState()

    const datasce = useSelector((state)=> state.transporters.alltrans)

    const datasource = datasce? datasce : ''
    
    const {output,searchdatalist} = useSearchHook(datasource)
    const [transdetails, settransdetails] = useState()
    const [mobilephone, setmobilephone] = useState()
   
    const {deleteTrans} = useTranslogic()
    /*-----------------------------
    START transporter FORM MODAL
    -----------------------------*/
    function setmodalShow(){
        setModalShow(true)
    }
    function setmodalhide(){
        setModalShow(false)
    }
    /*-----------------------------
    END transporter FORM MODAL
    -----------------------------*/

    /*-----------------------------
    START EDIT transporter FORM MODAL
    -----------------------------*/
  
    function esetmodalShow(id){
        if(datasource){ 
        const obj = {...datasource}
        const dd = Object.values(obj).filter(v => {
            if(v._id === id){
                return v
            }
            else{
                return ''
            }
        })
         setsingletransporter({...dd[0]})
        }

        esetModalShow(true)
    }
    
    function esetmodalhide(){
        esetModalShow(false)
    }


    /*-----------------------------
    END EDIT transporter FORM MODAL
    --------------------------J-*/
    const dat = {...datasource}


    const tr = useSelector((state)=> state.trucks.alltrucks)
    const trcks = {...tr}

    function transporterdetails(phone){

        setmobilephone(phone)

        const tot = Object.values(trcks).filter(v => {
            if(phone === v.tcontact){
                return v.trucknumber
            }
            else{
                return ''
            }
        })




        const rs = Object.values(dat).map(v => {
            if(v.tcontact === phone){  
            return (
                 <React.Fragment  key={v._id}>

                <tr>
                <td style={{width:"30%"}}>Transporter:</td>
                <td>{v.transporter}</td>
                </tr>


                <tr>
                <td style={{width:"30%"}}>Contact Person One:</td>
                <td>{v.contactp}</td>
                </tr>
                <tr>
                <td>Contact One:</td>
                <td>{v.tcontact}</td>
                </tr>


                <tr>
                <td style={{width:"30%"}}>Contact Person Two:</td>
                <td>{v.contactptwo}</td>
                </tr>
                <tr>
                <td>Contact Two:</td>
                <td>{v.tcontacttwo}</td>
                </tr>


                <tr>
                <td style={{width:"30%"}}>Contact Person Three:</td>
                <td>{v.contactpthree}</td>
                </tr>
                <tr>
                <td>Contact Three:</td>
                <td>{v.tcontactthree}</td>
                </tr>





                <tr>
                <td>Email:</td>
                <td>{v.email}</td>
                </tr>

                <tr>
                <td>Total Trucks:</td>
                <td>{tot.length}</td>
                </tr>


                </React.Fragment>
            )
        }
        else{
            return ''
        }
        })
        
        settransdetails(rs)
    }

    //Delete record
    function deleterec(id){
        deleteTrans(id)
    }

    let outputresult 
    let obs
    if(output){
        obs = output
    }
    else{
        obs = Object.values(dat)
    }
 
    outputresult = Object.values(obs).map((v,i) => {
        return (
            <Row key={v._id}   className="border p-2">
            <Col md={9} xs={12}>
            <Link to="/#" style={{color: "#000000",fontSize: "11px"}} 
            onClick={(e)=>{
                e.preventDefault()
                transporterdetails(v.tcontact)
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
                    <Tabs Heading="Add transporter"   setModalShow={setmodalShow} />
                    <Details DLIST = {transdetails} />
                    <Transtransaction PHONENUM={mobilephone} />
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer />
        
        <TransForm   onHide={setmodalhide} show ={modalshow} />

        <TransEditForm  output={singletransporter}  onHide={esetmodalhide} show ={emodalshow} />

        </>
    )
}