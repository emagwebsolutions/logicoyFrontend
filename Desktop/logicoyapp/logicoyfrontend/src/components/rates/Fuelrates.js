import React,{useReducer} from 'react'
import {Row,Col,Form,Button,Table} from 'react-bootstrap'
import useFuel from './logic/useFuel'
import {useSelector} from 'react-redux'
import useSearchHook from '../useSearchHook'
import Fueltables from './Fueltables'

function reducer(state,action){
    return {...state,[action.name] : action.value}
}
export default function Fuelrates(){
    const {addfuelrate,err} = useFuel()
    const [state,dispatch] = useReducer(reducer,{})
    const fueldata = useSelector((state)=>state.fuelrates.fuel)
    const fuelobj = {...fueldata}
    const {output,searchdatalist} = useSearchHook(fueldata)

    const onchange = (e)=>{
        const {name,value} = e.target
        dispatch({name,value})
    }

    const saveFuelrates = ()=>{
        const obj = {...state,litre: 1}
        addfuelrate(obj)
    }

    const resdata = output || fuelobj


    return (
        <>
        <Row>
            <Col xs={12} md={2}>
            <Form.Group className="mb-3" >
            <Form.Label className="flabl">Litres</Form.Label>
            <Form.Control  name="litre" onChange={onchange}  value="1"   type="text" placeholder="Litre" /> 
            </Form.Group>
            </Col>
  
            <Col xs={12} md={4}>
            <Form.Group className="mb-3">
            <Form.Label className="flabl">Fuel Station</Form.Label>
            <Form.Control  name="fuelstation" onChange={onchange} as="select" className="mb-3">
            <option value="" hidden>Select Fuel Station</option>
            <option value="Shell">Shell</option>
            <option value="Engene">Engene</option>
            </Form.Control>
            </Form.Group>
            </Col>


            <Col xs={12} md={3}>
            <Form.Group className="mb-3">
            <Form.Label className="flabl">Rate</Form.Label>
            <Form.Control name="rate" onChange = {onchange}  type="number"  />
            </Form.Group>
            </Col>

          
            <Col xs={12} md={3}>
                <br />
             <Button  onClick={saveFuelrates} className="mt-2 btn btn-secondary btn-md p-2">Save Rate</Button>
             </Col>

        </Row>
        <h2>{err}</h2>

        <br />
        <Row>

        <Col xs={12} md={6}>
            <div className="htitle">
            FUEL RATES
            </div>
        </Col>

        <Col xs={12} md={6}>
        <Form.Group>
        <Form.Control type="text" onChange={searchdatalist}  placeholder="Search Fuel rates" />
        </Form.Group>
        </Col>

        </Row>

        <div className="ratestbl">
        <Table responsive="lg" >
            <thead>
            <tr>
                <th>#</th>
                <th>Date</th>
                <th>Fuel Station</th>
                <th>Rate (Litre)</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>

            <Fueltables data={resdata} />

            </tbody>
        </Table>
        </div>
 
        </>
    )
}