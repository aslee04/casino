import React from 'react'
import ReactApexCharts from "react-apexcharts"

// https://apexcharts.com/docs/options/fill/#

const JackpotBigChart = () => {

    const series = [44]
    const options = {

        chart: {
            type: 'donut',
        },

        legend: {
            show: false,
        },

        fill: {
            colors: ["#e1ad01"]
        },

        plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                },

                total: {
                    showAlways: true,
                    show: true
                }
              }
            }
          },
    }

    return (
        <div className='flex justify-center items-center mt-[45px] mb-12'>
            <ReactApexCharts height={580} options={options} series={series} type="donut" />
        </div>
    )
}

export default JackpotBigChart