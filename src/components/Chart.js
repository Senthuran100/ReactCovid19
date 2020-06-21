import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Line } from "react-chartjs-2";
// import CanvasJS from 'canvasjs';


function Chart() {

    const [chart, setChart] = useState({});
    useEffect(
        () => {
            fetchData();
        }, []
        );

    const fetchData = async () => {
        try {
            const res = await axios.get(
                'https://disease.sh/v2/historical/all'
            );
            setChart({
                labels: Object.keys(res.data.cases),
                datasets: [
                    {
                        label: "Covid-19 Cases",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: Object.values(res.data.cases)
                    },
                    {
                        label: "Covid-19 Recovered",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(255, 99, 132, 0.2)",
                        borderColor: "rgba(255, 99, 132, 1)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: Object.values(res.data.recovered)
                    },
                    {
                        label: "Covid-19 Deaths",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(255, 206, 86, 0.2)",
                        borderColor: "rgba(255, 206, 86, 1)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: Object.values(res.data.deaths)
                    }
                    
                ]
            });
        } catch (error) {
            console.log(error.response);
        }
    };


    return (
        <div>
        <Line data={chart} options={{ responsive: true, height: '50px', width: "300px" }} />
        </div>
    );
};

export default Chart
