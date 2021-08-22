import React from 'react'
import {Row} from 'react-bootstrap'
import {Line} from 'react-chartjs-2'
import moment from 'moment'
import DateFormats from '../DateFormats'
import useReports from './logic/useReports'


export default function Linechart(){
    const {ym} = DateFormats()
    const {chartdata} = useReports()

    const start = moment().startOf('year')

    //Start date
    const std = new Date(start)
    const mnth = std.getMonth()
    const jan = mnth
    const feb = mnth+1
    const mar = mnth+2
    const apr = mnth+3
    const may = mnth+4
    const jun = mnth+5
    const jul = mnth+6
    const aug = mnth+7
    const sep = mnth+8
    const oct = mnth+9
    const nov = mnth+10
    const dec = mnth+11

    const resp = {...chartdata}
    function gettotal(d){
        const nd = new Date()
        nd.setMonth(d)
        const dte = ym(nd)
        const rex = Object.values(resp).filter(v => {
            return ym(v.date) === dte
        }).length
        return rex
    }
    const ja = gettotal(jan)
    const fe = gettotal(feb)
    const ma = gettotal(mar)
    const ap = gettotal(apr)
    const mai = gettotal(may)
    const ju = gettotal(jun)
    const july = gettotal(jul)
    const au = gettotal(aug)
    const se = gettotal(sep)
    const oc = gettotal(oct)
    const no = gettotal(nov)
    const de = gettotal(dec)


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
                        data: [ja,fe,ma,ap,mai,ju,july,au,se,oc,no,de],
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