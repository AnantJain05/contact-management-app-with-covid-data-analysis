import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

function LineGraph() {
    const { isLoading, data} = useQuery('covid-data', () => {
        return axios.get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
    })

    // for (key, value) in data?.data.cases
    if (isLoading){
        return <h2>Loading...</h2>
    }
    
    const chartData = {
        labels: Object.keys(data?.data.deaths),
        datasets: [
          {
            label: "Cases",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: Object.keys(data?.data.cases).map((key:any) => data?.data.cases[key]),
          },
          {
            label: "Deaths",
            backgroundColor: "rgb(0, 217, 255)",
            borderColor: "rgb(0, 217, 255)",
            data: Object.keys(data?.data.deaths).map((key:any) => data?.data.deaths[key]),
          },
          {
            label: "Recoveries",
            backgroundColor: "rgb(0, 0, 255)",
            borderColor: "rgb(0, 0, 255)",
            data: Object.keys(data?.data.recovered).map((key:any) => data?.data.recovered[key]),
          },
        ],
      };

    // console.log(data);
    return (
        <>
            <Line data={chartData}></Line>
        </>
    )
}

export default LineGraph;