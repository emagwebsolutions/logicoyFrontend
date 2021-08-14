import React,{useState} from 'react'
import Navbars from '../Navbars'
import Footer from '../Footer'
import {Container,Row,Col} from 'react-bootstrap'
import List from '../shared/List'
import Details from '../shared/Details'
import Trucktransactions from '../shared/Trucktransactions'
import Tabs from '../shared/Tabs'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {FaTrashAlt, FaRegEdit} from 'react-icons/fa'
import TruckForm from './TruckForm'
import TruckEditForm from './TruckEditForm'
import useTrucklogic from './logic/useTrucklogic'
import useSearchHook from '../useSearchHook'

export default function Truck(){
    const [modalshow, setModalShow] = React.useState(false);
    const [emodalshow, esetModalShow] = React.useState(false);
    const [singletruck,setsingletruck] = useState()
    const datasource = useSelector((state)=> state.trucks.alltrucks)
    const {output,searchdatalist} = useSearchHook(datasource)

    const [drvdetails, setdrvdetails] = useState()
    const [trucknumb, settrucknumber] = useState()
   
    const {deletetrucks} = useTrucklogic()
    /*-----------------------------
    START Truck FORM MODAL
    -----------------------------*/
    function setmodalShow(){
        setModalShow(true)
    }
    function setmodalhide(){
        setModalShow(false)
    }
    /*-----------------------------
    END Truck FORM MODAL
    -----------------------------*/

    /*-----------------------------
    START EDIT Truck FORM MODAL
    -----------------------------*/


  
    function esetmodalShow(id){
        const obj = {...datasource}
        const dd = Object.values(obj).filter(v => {
            if(v._id === id){
                return v
            }
            else{
                return ''
            }
        })
         setsingletruck({...dd[0]})
        esetModalShow(true)
    }
    
    function esetmodalhide(){
        esetModalShow(false)
    }
    /*-----------------------------
    END EDIT Truck FORM MODAL
    -----------------------------*/
    const dat = {...datasource}
  

    function Truckdetails(trucknumber){
        settrucknumber(trucknumber)
        const rs = Object.values(dat).map(v => {
            if(v.trucknumber === trucknumber){  
            return (
                <React.Fragment key={v._id}>

                <tr>
                <td>Truck Number:</td>
                <td>{v.trucknumber}</td>
                </tr>

                <tr>
                <td>Transporter:</td>
                <td>{v.transporter}</td>
                </tr>

                <tr>
                <td>Transporter Number:</td>
                <td>{v.tcontact}</td>
                </tr>

                </React.Fragment>
            )
        }
        else{
            return ''
        }
 
        })
        
        
        setdrvdetails(rs)
    }



    //Delete record
    function deleterec(id){
        deletetrucks(id)
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
                Truckdetails(v.trucknumber)
            }}>
            {i+1}. {v.trucknumber}
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
                    <Tabs Heading="Add Truck"   setModalShow={setmodalShow} />
                    <Details DLIST = {drvdetails} />
                    <Trucktransactions TRUCKNUM={trucknumb} />
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer />
        
        <TruckForm   onHide={setmodalhide} show ={modalshow} />

        <TruckEditForm  output={singletruck}  onHide={esetmodalhide} show ={emodalshow} />

        </>
    )
}