import React from 'react'
import {Row} from 'react-bootstrap'
import {Line} from 'react-chartjs-2'
import moment from 'moment'
import DateFormats from '../DateFormats'
import useReports from './logic/useReports'


export default function Linechart(){
    const {ymd} = DateFormats()
    const {chartdata} = useReports()

    const start = moment().startOf('week')

    //Start date
    const std = new Date(start)
    const day = std.getDate()
    const mo = day+1
    const tu = day+2
    const we = day+3
    const th = day+4
    const fr = day+5
   

    const resp = {...chartdata}
    function gettotal(d){
        const nd = new Date()
        nd.setDate(d)
        const dte = ymd(nd)
        const rex = Object.values(resp).filter(v => {
            return ymd(v.date) === dte
        }).length
        return rex
    }
    const mon = gettotal(mo)
    const tue = gettotal(tu)
    const wed = gettotal(we)
    const thr = gettotal(th)
    const fri = gettotal(fr)


    return (
    <>
    <Row>
    <div className="chartbx">
        <Line
            data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                datasets: [
                    {
                        label: 'THIS YEAR\'S TRIPS',
                        data: [mon,tue,wed,thr,fri],
                        backgroundColor: [    
                            'rgba(255,99,132,0.2)', 
                            'rgba(54,162,235,0.2)', 
                            'rgba(255,206,86,0.2)', 
                            'rgba(75,192,192,0.2)', 
                            'rgba(153,102,255,0.2)', 
                            'rgba(255,99,132,0.2)', 
                            'rgba(54,162,235,0.2)', 
                            'rgba(255,206,86,0.2)', 
                            'rgba(75,192,192,0.2)', 
                            'rgba(153,102,255,0.2)', 
                            'rgba(75,192,192,0.2)', 
                            'rgba(153,102,255,0.2)',       
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)', 
                            'rgba(54,162,235,1)', 
                            'rgba(255,206,86,1)', 
                            'rgba(75,192,192,1)', 
                            'rgba(153,102,255,1)', 
                            'rgba(255,159,64,1)',
                            'rgba(255,99,132,1)', 
                            'rgba(54,162,235,1)', 
                            'rgba(255,206,86,1)', 
                            'rgba(75,192,192,1)', 
                            'rgba(153,102,255,1)', 
                            'rgba(255,159,64,1)',
                            'rgba(153,102,255,1)', 
                            'rgba(255,159,64,1)',
                        ],
                        borderWidth: 1,
                    },
     
                ],
            }}
            width={500}
            height={400}
            options = {{
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                        }
                    }]
                },
         
            }}
        />   
    </div>
    </Row>
    </>
    )



}