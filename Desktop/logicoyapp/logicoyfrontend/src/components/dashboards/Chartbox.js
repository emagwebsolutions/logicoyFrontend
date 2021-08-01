import React from 'react'
import {Row} from 'react-bootstrap'
import {Bar} from 'react-chartjs-2'
export default function Chartbox(){

    return (
    <>
    <Row>
    <div className="chartbx">
        <Bar
            data={{
                labels: ['Accra', 'Kumasi', 'Takoradi', 'Tamale', 'Sunyani', 'Koforidua'],
                datasets: [
                    {
                        label: 'NUMBER OF TRIPS',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255,99,132,0.2)', 
                            'rgba(54,162,235,0.2)', 
                            'rgba(255,206,86,0.2)', 
                            'rgba(75,192,192,0.2)', 
                            'rgba(153,102,255,0.2)', 
                            'rgba(255,159,64,0.2)',
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)', 
                            'rgba(54,162,235,1)', 
                            'rgba(255,206,86,1)', 
                            'rgba(75,192,192,1)', 
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