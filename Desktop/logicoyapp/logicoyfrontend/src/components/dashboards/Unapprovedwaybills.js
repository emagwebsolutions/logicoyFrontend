import React from 'react'
import {Table} from 'react-bootstrap'
import useUnapprovedbillslogic from './logic/useUnapprovedbillslogic'

export default function Unapprovedwaybills({data}){
  const {output} = useUnapprovedbillslogic({data})

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