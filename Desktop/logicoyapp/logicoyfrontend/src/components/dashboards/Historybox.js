import React from 'react'
import {Row} from 'react-bootstrap'
import useHistoryboxlogic from './logic/useHistoryboxlogic'

export default function Historybox(){

//History logic
const {output} = useHistoryboxlogic()

    return (
    <>
    <Row>
    <div className="activitybx">
    {output}
    </div>
    </Row>

    </>
    )



}