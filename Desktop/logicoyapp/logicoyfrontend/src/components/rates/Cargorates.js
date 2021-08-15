import React,{useReducer,useState} from 'react'
import {Table} from 'react-bootstrap'
import {Row,Col,Form,Button} from 'react-bootstrap'
import useCargo from './logic/useCargo'



function reducer(state,action){
    return {...state,[action.name] : action.value}
}

export default function Cargorates(){
    const [type,settype] = useState("")
    const {addcargorate,err} = useCargo()
    const [state,dispatch] = useReducer(reducer,{})

    const onchange = (e)=>{
        const {name,value} = e.target
        if(name === 'owner')
        value.toLowerCase() === 'olam'? settype('Bags') : settype('Tonage')
        
        dispatch({name,value})
    }


    const saveCargorates = ()=>{
        const obj = {...state,type}
        console.log(obj)
        addcargorate(obj)
    }

  
    return (
        <>
        <Row>
            <Col xs={12} md={3}>
            <Form.Group className="mb-3">
            <Form.Label className="flabl">Cargo Owner</Form.Label>
            <Form.Control  name="owner" onChange = {onchange} as="select" className="mb-3">
            <option hidden>Select Cargo Owner</option>
            <option value="OLAM">OLAM</option>
            <option value="WILMAR">WILMAR</option>
            </Form.Control>
            </Form.Group>
            </Col>

            <Col xs={12} md={2}>
            <Form.Group className="mb-3">
            <Form.Label className="flabl">Type</Form.Label>
            <Form.Control  name="type" defaultValue={type? type : ''} onChange={onchange} disabled type="text"  />
            </Form.Group>
            </Col>
  
            <Col xs={12} md={3}>
            <Form.Group className="mb-3">
            <Form.Label className="flabl">Destination</Form.Label>
            <Form.Control  name="destination" onChange = {onchange}  as="select" className="mb-3">
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
            </Col>


            <Col xs={12} md={2}>
            <Form.Group className="mb-3">
            <Form.Label className="flabl">Rate</Form.Label>
            <Form.Control name="rate" onChange = {onchange}  type="number"  />
            </Form.Group>
            </Col>


            <Col xs={12} md={2}>
                <br />
             <Button  onClick={saveCargorates} className="mt-2 btn btn-secondary btn-md p-2">Save Rate</Button>
             </Col>

        </Row>

        <h2>{err}</h2>

        <br />

        <Row>
        <Col xs={12} md={6}>
            <div className="htitle">
            CARGO RATES
            </div>
        </Col>

        <Col xs={12} md={6}>
        <Form.Group>
        <Form.Control type="text"  placeholder="Search Cargo rates" />
        </Form.Group>
        </Col>

        </Row>


        <div className="ratestbl">
        <Table responsive="lg" >
            <thead>
            <tr>
                <th>#</th>
                <th>Date</th>
                <th>Cargo Owner</th>
                <th>Destination</th>
                <th>Rate</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
        
     

            </tbody>
        </Table>
        </div>
  
        </>
    )
}