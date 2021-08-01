import React from 'react'
import {Row,Col,Form,Table} from 'react-bootstrap'
import useApprovedbillslogic from './logic/useApprovedbillslogic'

export default function useApprovedwaybills({data}){
    const {output} = useApprovedbillslogic({data})
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
            {output}
            </tbody>
        </Table>
        </div>
        </>
    )
}