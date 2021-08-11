import React,{useReducer,useState} from 'react'
import {Form,Col,Row,Modal,Button} from 'react-bootstrap'
import useJobslogic from './logic/useJobslogic'
import {useSelector} from 'react-redux'

function reducer(state,action){
  return {...state, [action.name] : action.value}
}


export default function JobsForm(props){
  const [trns,setrans] = useState("")
  const [drv,setdrv] = useState("")
  const cc = useSelector((state)=> state.drivers.alldrivers)
  const dta = {...cc}

  const tr = useSelector((state)=> state.trucks.alltrucks)
  const trcks = {...tr}

  
    const [state,dispatch] = useReducer(reducer, {})
    const {addjob,err} = useJobslogic()
      function onchange(e){
        const {name,value} = e.target

        if(name === 'trucknumber'){
          setrans("")
          const rr = Object.values(trcks).filter(v => {
            return v.trucknumber === value
          })
          setrans(rr[0])
        }

        if(name === 'driver'){
          setdrv("")
          const rr = Object.values(dta).filter(v => {
            return v.driver === value
          })
          setdrv(rr[0])
        }

        dispatch({name,value})
      }
   
 

      function addJobs(){
        
          const st = {
              fullname:  state.fullname? state.fullname : '',
              customer:  state.customer? state.customer : '',
              transporter:  trns.transporter?  trns.transporter : '',
              tcontact:  trns.tcontact?  trns.tcontact : '',
              bags:  state.bags?  state.bags : '',
              destination:  state.destination?  state.destination : '',
              trucknumber:  state.trucknumber?  state.trucknumber : '',
              driver:  drv.driver? drv.driver : '',
              dcontact:  drv.dcontact? drv.dcontact : '',
              license:  drv.license?  drv.license : '',
              fuel:  state.fuel?  state.fuel : '',
              fuelstation:  state.fuelstation?  state.fuelstation : '',
              date: state.date? state.date : ''
          }

    
          addjob(st)
      }


      return (
        <>
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
       >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h3><strong>New Job</strong></h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body   className="modalpadding">
  
      <Row>
            <Col md={6} xs={12}>
  
            <Form.Group className="mb-3">
            <Form.Label className="flabl">Cargo Owner</Form.Label>
            <Form.Control  name="fullname" onChange = {onchange} as="select" className="mb-3">
            <option hidden>Select Cargo Owner</option>
            <option value="OLAM">OLAM</option>
            <option value="WILMAR">WILMAR</option>
            </Form.Control>
            </Form.Group>


            <Form.Group className="mb-3">
            <Form.Label className="flabl">Customer</Form.Label>
            <Form.Control  name="customer" onChange = {onchange}  className="finpt" type="text" placeholder="Customer" />
            </Form.Group>

  
            <Form.Group className="mb-3">
            <Form.Label className="flabl">Transporter</Form.Label>
            <Form.Control value={trns? trns.transporter : ''} disabled name="transporter" onChange = {onchange}  className="finpt" type="text" placeholder="Transporter" />
            </Form.Group>
  
            <Form.Group className="mb-3">
            <Form.Label className="flabl">Transporter's Contact</Form.Label>
            <Form.Control  name="tcontact" value={trns? trns.tcontact : ''} disabled onChange = {onchange}    className="finpt" type="text" placeholder="Transporter's Contact" />
            </Form.Group>
  
            <Form.Group className="mb-3" >
            <Form.Label className="flabl">Bags/Tonnage Loaded</Form.Label>
            <Form.Control  name="bags" onChange = {onchange}  className="finpt" type="number" placeholder="Bags/Tonnage Loaded" />
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label className="flabl">Destination</Form.Label>
            <Form.Control  name="destination" onChange = {onchange} as="select" className="mb-3">
            <option hidden>Destination</option>
            <option value="ACCRA">ACCRA</option>
            <option value="ACHIMOTA">ACHIMOTA</option>
            <option value="ADA">ADA</option>
            <option value="ADIDOME">ADIDOME</option>
            <option value="AFLAO">AFLAO</option>
            <option value="AGBOGBLOSHIE">AGBOGBLOSHIE</option>
            <option value="AGONA ANKWANTA">AGONA ANKWANTA</option>
            <option value="AGONA SWEDRU">AGONA SWEDRU</option>
            <option value="AIYINASEt">AIYINASE</option>
            <option value="AJUMAKO">AJUMAKO</option>
            <option value="AKATSI">AKATSI</option>
            <option value="AKIM ODA">AKIM ODA</option>
            <option value="AKOSOMBO">AKOSOMBO</option>
            <option value="AKRADE">AKRADE</option>
            <option value="AKWATIA">AKWATIA</option>
            <option value="ANLOGA">ANLOGA</option>
            <option value="ASAMANKESE">ASAMANKESE</option>
            <option value="ASANKRAGUA">ASANKRAGUA</option>
            <option value="ASESEWA">ASESEWA</option>
            <option value="ASHAIMAN">ASHAIMAN</option>
            <option value="ASSIN FOSU">ASSIN FOSU</option>
            <option value="ASSIN PRASO">ASSIN PRASO</option>
            <option value="ATEBUBU">ATEBUBU</option>
            <option value="AXIM">AXIM</option>
            <option value="BANDA NKWANTA">BANDA NKWANTA</option>
            <option value="BAWKU">BAWKU</option>
            <option value="BEREKUM">BEREKUM</option>
            <option value="BOGOSO">BOGOSO</option>
            <option value="BOLGATANGA">BOLGATANGA</option>
            <option value="BOPP">BOPP</option>
            <option value="BUIPE">BUIPE</option>
            <option value="CAPE COAST">CAPE COAST</option>
            <option value="DAMBAI">DAMBAI</option>
            <option value="DATANO">DATANO</option>
            <option value="DAWENYA">DAWENYA</option>
            <option value="DENU">DENU</option>
            <option value="DIASO">DIASO</option>
            <option value="DOBRO">DOBRO</option>
            <option value="DORMAA AHENKRO">DORMAA AHENKRO</option>
            <option value="DUNKWA ON OFFIN">DUNKWA ON OFFIN</option>
            <option value="EJURA">EJURA</option>
            <option value="ELUBO">ELUBO</option>
            <option value="ENCHI">ENCHI</option>
            <option value="FUMESA">FUMESA</option>
            <option value="GOASO">GOASO</option>
            <option value="HALF ASSINI">HALF ASSINI</option>
            <option value="HAMILE">HAMILE</option>
            <option value="HO">HO</option>
            <option value="HOHOE">HOHOE</option>
            <option value="INCHABAN">INCHABAN</option>
            <option value="JIRAPA">JIRAPA</option>
            <option value="JOMORO">JOMORO</option>
            <option value="KADE">KADE</option>
            <option value="KADJEBI">KADJEBI</option>
            <option value="KASOA">KASOA</option>
            <option value="KINTAMPO">KINTAMPO</option>
            <option value="KOFORIDUA">KOFORIDUA</option>
            <option value="KROBO ODUMASI">KROBO ODUMASI</option>
            <option value="KUKURANTUMI">KUKURANTUMI</option>
            <option value="KUMASI">KUMASI</option>
            <option value="LASHIBI">LASHIBI</option>
            <option value="MAMPONG">MAMPONG</option>
            <option value="MANKESSIM">MANKESSIM</option>
            <option value="NANDOM">NANDOM</option>
            <option value="NAVRONGO">NAVRONGO</option>
            <option value="NKAWKAW">NKAWKAW</option>
            <option value="NSAWAM">NSAWAM</option>
            <option value="OBUASI">OBUASI</option>
            <option value="ODUMASE">ODUMASE</option>
            <option value="PEDUASE">PEDUASE</option>
            <option value="POKUASE">POKUASE</option>
            <option value="SALAGA">SALAGA</option>
            <option value="SAMPA">SAMPA</option>
            <option value="SAMRA BOI">SAMRA BOI</option>
            <option value="SANKORE">SANKORE</option>
            <option value="SEFWI ASAWINSO">SEFWI ASAWINSO</option>
            <option value="SEFWI DATANO">SEFWI DATANO</option>
            <option value="SEFWI EDWINASE">SEFWI EDWINASE</option>
            <option value="SEFWI WIASO">SEFWI WIASO</option>
            <option value="SHAMA JUNCTION">SHAMA JUNCTION</option>
            <option value="SOMANYA">SOMANYA</option>
            <option value="SOMBO">SOMBO</option>
            <option value="SUHUM">SUHUM</option>
            <option value="SUNYANI">SUNYANI</option>
            <option value="SWEDRU">SWEDRU</option>
            <option value="TAKORADI">TAKORADI</option>
            <option value="TAMALE">TAMALE</option>
            <option value="TARKWA">TARKWA</option>
            <option value="TATALE">TATALE</option>
            <option value="TECHIMAN">TECHIMAN</option>
            <option value="TEMA (ONLY)">TEMA (ONLY)</option>
            <option value="TIKOBO NO. 1">TIKOBO NO. 1</option>
            <option value="TUMU">TUMU</option>
            <option value="TWIFFO PRASO">TWIFFO PRASO</option>
            <option value="WA">WA</option>
            <option value="WALEWALE">WALEWALE</option>
            <option value="WASSA AKROPONG">WASSA AKROPONG</option>
            <option value="WEIJA">WEIJA</option>
            <option value="WENNEBA">WENNEBA</option>
            <option value="YEJI">YEJI</option>
            <option value="YIPALA">YIPALA</option>
            </Form.Control>
            </Form.Group>




            <Form.Group className="mb-3">
            <Form.Label className="flabl">Truck Number</Form.Label>
            <Form.Control  name="trucknumber" onChange = {onchange} as="select" className="mb-3">
            <option hidden>Select a truck</option>
              {   
              Object.values(trcks).map(v =>{
                return <option key={v._id} value={v.trucknumber}>{v.trucknumber}</option>
              })
              }
            </Form.Control>
            </Form.Group>
  
  

  
            </Col>
            <Col md={6} xs={12}>

            <Form.Group className="mb-3">
            <Form.Label className="flabl">Driver's Name</Form.Label>
            <Form.Control  name="driver" onChange = {onchange} as="select" className="mb-3">
            <option hidden>Select Driver</option>
              {   
              Object.values(dta).map(v =>{
                return <option key={v._id} value={v.driver}>{v.driver}</option>
              })
              }
            </Form.Control>
            </Form.Group>


  
            <Form.Group className="mb-3" >
            <Form.Label className="flabl">Driver's Contact</Form.Label>
            <Form.Control   name="dcontact" value={drv? drv.dcontact : ''}  disabled onChange = {onchange}  className="finpt" type="text" placeholder="Driver's Contact" />
            </Form.Group>
  
            <Form.Group className="mb-3" >
            <Form.Label className="flabl">Driver License Number</Form.Label>
            <Form.Control value={drv? drv.license : ''} disabled name="license" onChange = {onchange}  className="finpt" type="text" placeholder="Driver License Number" />
            </Form.Group>
  
            <Form.Group className="mb-3" >
            <Form.Label className="flabl">Fuel (Optional)</Form.Label>
            <Form.Control  name="fuel" onChange = {onchange}  className="finpt" type="number" placeholder="Fuel" />
            </Form.Group>
  
            <Form.Group className="mb-3">
            <Form.Label className="flabl">Fuel Station (Optional)</Form.Label>
            <Form.Control  name="fuelstation" onChange = {onchange} as="select" className="mb-3">
            <option value="" hidden>Select Filling Station</option>
            <option value="Shell">Shell</option>
            <option value="Engene">Engene</option>
            </Form.Control>
            </Form.Group>
  
            <Form.Group className="mb-3">
            <Form.Label className="flabl">Date</Form.Label>
            <Form.Control name="date" onChange = {onchange}  
            type="date" className="finpt" placeholder="Date" 
             />
            </Form.Group>

   
  
            </Col>
        </Row>
  
        <h2>{err}</h2>
      
        </Modal.Body>
        <Modal.Footer>
       
          <Button onClick={props.onHide} className="btn btn-danger btn-md">Close</Button>
          <Button onClick={addJobs}  className="btn btn-success btn-md">Save </Button>
        </Modal.Footer>
  
      </Modal>
        </>
    )
}